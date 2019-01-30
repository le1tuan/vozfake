import React from 'react';

const styles = {
  textCenter: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14
  },
  backgroundContent: {
    background: '#F8F8F7',
    marginBottom: 30,
    boxShadow: '3px 3px 5px 1px rgba(33, 43, 54, 0.1)'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
}

interface Props {
  news: {
    id: number,
    title: string,
    created: string,
    total_comments: number,
    user: string,
    avatar?: string,
  } 
}

class Card extends React.Component<Props, any> {
  render() {
    const createdTime = new Date(this.props.news.created);
    return (
      <a href={`/linh-tinh/${this.props.news.id}`} className="no-underline">
        <div className="w-full lg:flex ">
          <div style={styles.backgroundContent} className="w-full rounded-b rounded-t lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-2">{this.props.news.title}</div>
            </div>
            <div className="flex items-center flex-row justify-between flex-wrap">
              {
                this.props.news.avatar 
                ?  <span className="inline-flex items-center flex-row" ><img 
                    src={this.props.news.avatar} 
                    alt="avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  /><p className="text-black leading-none">{this.props.news.user}</p></span>
                : (
                  <span>
                    <p className="text-black leading-none">{this.props.news.user}</p>
                  </span>
                )
              }
              <div className="text-sm flex items-center flex-row flex-wrap mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0">
                <p className="text-grey-dark pr-3">{`${createdTime.getDate()}/${createdTime.getMonth() + 1}/${createdTime.getFullYear()}`}</p>
                <p className="text-grey-dark pr-3">{this.props.news.total_comments} bình luận chửi nhau</p>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
  }
}

export default Card;
