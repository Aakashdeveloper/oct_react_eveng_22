import React,{Component} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews,galleryNews } from '../actions/actionFile';
import LatestNews from '../component/Home/LatestDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';
import GalleryNews from '../component/Home/GalleryDisplay';


class Home extends Component {
    //call action 
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestNews ldata={this.props.datalist.latestNews}/>
                <ArticleNews adata={this.props.datalist.articleNews}/>
                <GalleryNews gdata={this.props.gallist.galleryNews}/>
            </div>
        )
    }

}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

export default connect(mapStateToProps)(Home)