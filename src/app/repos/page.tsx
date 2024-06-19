import {getRepos, RepositoryDto} from "@/entities";
import {FetchParams, toDate} from "@/shared";
import Link from "next/link";

interface IPageProps {
    searchParams: {
        token: string;
        username: string
    }
}
export default async function Page({searchParams}: IPageProps) {
    const {token, username} = searchParams;
    FetchParams.Headers = {
        'Authorization': `Bearer ${token}`
    }
    const result = await getRepos(username)
    const repositories: RepositoryDto[] = await result
    return <div>
        <h1 className={'text-center font-bold text-lg mt-10'}>Github Repositories</h1>
        <div className={'flex justify-center pt-[100px] flex-wrap gap-[30px]'}>
            {repositories.map((repository, key: number) =>
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96" key={key}>
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {repository.name}
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Language: <span className={'font-bold'}>{repository.language}</span>
                        </p>
                        {
                            repository.description && <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Description: <span className={'font-bold'}>{repository.description}</span>
                            </p>
                        }
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Created date: <span className={'font-bold'}>{toDate(repository.created_at)}</span>
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <Link
                            href={`/repos/${repository.name}/commits?token=${searchParams.token}&username=${searchParams.username}`}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            Show Commits
                        </Link>
                    </div>
                </div>)
            }
        </div>
    </div>
}