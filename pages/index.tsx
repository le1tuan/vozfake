import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import NavBar from './components/NavBar/index';
import Card from './components/Card/index';

const styles = {
  category: {
    marginBottom: 20,
    fontWeight: 700
  },
  cards: {
    padding: 10,
    margin: 20,
    backgroundColor: '#fffff'
  },
  columns: {
    backgroundColor: '#ffff',
  }
}

type NewsItem = {
  id: number,
  title: string,
  created: string,
  total_comments: number,
  user: string,
  avatar: string, 
}


class App extends React.Component<any, any> {
  constructor(props: Object) {
    super(props)
  }

  private static getInitialProps =  async (props: any) => {
    const res = await fetch('https://p.voz.vn/feed/?page=1&box=diembao');
    const data = await res.json();
    const returnData: NewsItem[] = [];
    data.results.map((item: any) => {
      returnData.push({
        id: item.id,
        title: item.title,
        created: item.created,
        total_comments: item.total_comments,
        user: item.user_meta.display_name,
        avatar: item.user_meta.photo_url,
      })
      return item
    })
    return {results: returnData};
  }

  render() {
    return (
      <div>
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>        
        <NavBar />
        <div className="flex flex-col flex-no-wrap items-center justify-center" style={styles.columns}>
          <div className="lg:w-4/5 xl:w-4/5 md:w-4/5 sm:w-full w-full" style={styles.cards}>
            <h2 style={styles.category}>Tin Linh Tinh</h2>
            {
              this.props.results.map((result: NewsItem) => <Card key={result.id} news={result} />)
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App