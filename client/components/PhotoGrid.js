import React from 'react';
import Photo from './Photo';

// dumping JSON and basic format
//<pre>
//    {JSON.stringify(this.props.posts,null,' ')}
//</pre>

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
            {this.props.posts.map((post,i) => <Photo {...
                this.props} key={i} i={i} post={post}/>)}
            </div>
        )
    }

});

export default PhotoGrid;
