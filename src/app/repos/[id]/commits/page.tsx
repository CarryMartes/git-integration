import {CommitDto, getCommits} from "@/entities";
import {revalidateTag} from "next/cache";
import {FetchParams, Loader, toDate} from "@/shared";
import {Suspense} from "react";
import {SubmitButton} from "@/features";

interface IPageProps {
    params: {
        id: string
    },
    searchParams: {
        token: string;
        username: string
    }
}

async function Commits({repoName, searchParams}: {repoName: string, searchParams: IPageProps['searchParams']}) {
    FetchParams.Headers = {
        'Authorization': `Bearer ${searchParams.token}`
    }
    const result = await getCommits(repoName, 'CarryMartes')
    const commits: CommitDto[] = await result;
    if ((commits as any).status === '404') {
        return <div>Not FOUND</div>
    }
    return <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm">
        {commits ? commits.map(({commit}, key: number) =>
            <li className="px-6 py-4" key={key}>
                <div className="flex justify-between">
                    <span className="font-semibold text-lg overflow-hidden">{commit.message}</span>
                    <span className="text-gray-500 text-xs">{toDate(commit.committer.date)}</span>
                </div>
                <p className="text-gray-700 mt-[10px]">Author: <span className={'font-bold'}>{commit.author.name}</span></p>
            </li>
        ) : <li>Not Found</li>}
    </ul>
}

export default async function Page({params, searchParams}: IPageProps) {
    const refreshCommits = async () => {
        "use server";
        revalidateTag('commits')
    }

    return <div>
        <h1 className={'text-center font-bold text-lg mt-10'}>Github Repositories</h1>
        <form action={refreshCommits} className={'text-center mt-[20px]'}>
            <SubmitButton />
        </form>
        <div className={'flex justify-center pt-[100px] flex-wrap gap-[30px]'}>
            <Suspense fallback={<Loader />}>
                <Commits searchParams={searchParams} repoName={params.id} />
            </Suspense>
        </div>
    </div>
}