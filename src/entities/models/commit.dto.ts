export interface CommitDto {
    sha: string;
    commit: {
        author: {
            name: string,
            email: string,
            date: string
        };
        message: string;
        comment_count: number;
        committer: {
            date: string
        }
    }
}