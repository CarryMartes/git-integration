'use client';
import {Input} from "@/shared";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [form, setForm] = useState<{token: string, username: string}>({
        token: '',
        username: ''
    })
      return (
          <div className={'flex items-center justify-center h-[100vh]'}>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <Input value={form.token}
                       onChange={(e) => setForm({...form, token: e.target.value})}
                       label={'Personal Access Token'}
                       required />
              </div>
              <div className="mb-5">
                <Input label={'Github Username'}
                       onChange={(e) => setForm({...form, username: e.target.value})}
                       required />
              </div>
              <button type="submit"
                      onClick={() => {
                          router.push(`/repos?token=${form.token}&username=${form.username}`)
                      }}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Show repositories
              </button>
            </form>
          </div>
      )
}
