import type { Metadata, ResolvingMetadata } from 'next'

//Dynamic metadata to-do

type Props = {
  params: { id: string }
}
 
export async function generateMetadata({ params }: Props)  : Promise<Metadata> {
    const id = params.id
  return {
    title: 'Post '+id,
  }
}

export default function Post({params} : {params: {postId: string}}) {
    return (
        <main>
            PostPage {params.postId}
        </main>
    );
}