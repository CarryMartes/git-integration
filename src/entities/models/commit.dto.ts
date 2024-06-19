export interface CommitDto {
    sha: string;
    commit: {
        author: string;
        message: string;
        comment_count: number;
        committer: {
            date: string
        }
    }
}