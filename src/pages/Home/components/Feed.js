import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const post = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Michelle Vieira',
            userName: 'MiVieira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um app do zero utilizando React.js",
        date: "September 17, 2021",
        description: "Fala pessoal! Qual o framework favorito de vocês ?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "images/posts/post9.jpeg"
    },
    {
        id: 1,
        author: {
            id: 1,
            name: 'Michelle Vieira',
            userName: 'MiVieira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Aprendendo Arrow functions",
        date: "September 17, 2021",
        description: "Fala pessoal! Vocês sabem o que é arrow functios ?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "images/posts/post-01.PNG"
    },
]

function Feed() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {
                post.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }

        </div>
    )
}

export default Feed;