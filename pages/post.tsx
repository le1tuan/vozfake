import React from 'react';
import {withRouter} from 'next/router'


class Post extends React.Component {
  static getInitialProps = async (params: any) => {
    const res = await fetch(`https://p.voz.vn/posts/${params.query.id}`);
    const data = await res.json();
    const result = {
      title: data.title,
      author: data.user_meta.display_name,
      photo_url: data.user_meta.photo_url,
      content: data.content
    }
    return data;
  }


  render() {
    return (
      <div className="flex justify-center" >
        <style jsx global>{`blockquote { background: #F8F8F7; padding: 10px; width: 80%; margin: 0px; box-sizing: border-box}; img {width: 100%}`}</style>
        <div className="my-2 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-3/5" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
      </div>
    )
  }
}

export default withRouter(Post);