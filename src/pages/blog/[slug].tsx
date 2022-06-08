import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next/types';

interface DateProps {
    date: string;
}

export default function BlogPost({ date }: DateProps) {
    return <h1>{ date }</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            date: new Date().toString(),
        },
        revalidate: 5
    }
}