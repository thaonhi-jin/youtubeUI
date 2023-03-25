import React from 'react'
import VideosRow from './VideosRow'

function HomeContent() {
    const recommendedVideos = [
        {
            thumbnail: "https://i.ytimg.com/vi/AuDzUTEN6Ys/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4tHEvKN2ls-GDbKYdEqJPe893nQ",
            title: "TAY NẮM TAY RỜI",
            link: "https://www.youtube.com/watch?v=AuDzUTEN6Ys",
            length: '05:08',
            channel: {
                name: "Phạm Đình Thái Ngân",
                link: "https://www.youtube.com/channel/UCYambOMJO7acghRqxoBK-zg",
            },
            viewCount: '7.5M views',
            uploadedAt: "2 years ago"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/FWYrRSWabIs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPehucw8RG5ceQIeYvW-ycc-c7rQ",
            title: "Cao Ốc 20",
            link: "https://www.youtube.com/watch?v=FWYrRSWabIs",
            length: '04:14',
            channel: {
                name: "EvB Records",
                link: "https://www.youtube.com/@EvBRecords",
            },
            viewCount: '55M views',
            uploadedAt: "3 years ago"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/ybfq5gtvnj0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOsH0cRUMHAoMAk0O_Su8qX1d_iQ",
            title: "SỢ RẰNG EM BIẾT ANH CÒN YÊU EM",
            link: "https://www.youtube.com/watch?v=ybfq5gtvnj0",
            length: '05:20',
            channel: {
                name: "JUUN D",
                link: "https://www.youtube.com/channel/UCLMbPL6s6f8XksvF657Q_6A",
            },
            viewCount: '54M views',
            uploadedAt: "3 years ago"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/fsTzH9uZJuM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGQFMaKF1EcSxiPahqsXmqAYe6fg",
            title: "MỘT NỬA YÊU THƯƠNG",
            link: "https://www.youtube.com/watch?v=fsTzH9uZJuM",
            length: '06:18',
            channel: {
                name: "JUUN D",
                link: "https://www.youtube.com/channel/UCLMbPL6s6f8XksvF657Q_6A",
            },
            viewCount: '4.3M views',
            uploadedAt: "3 years ago"
        },
    ]
  return (
    <div className="home-content">
        <VideosRow
            label = "Recommended"
            videos = {recommendedVideos}
        />

        <VideosRow
            label = ""
            videos = {recommendedVideos}
        />
    </div>
  )
}

export default HomeContent