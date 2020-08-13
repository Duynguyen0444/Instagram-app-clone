import React, { Component } from 'react';
import './styles.css';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { data } = this.props;
		return (
			<article className="Post" ref="Post">
				{/* Avatar user */}
				<header>
					<div className="Post-user">
						<div className="Post-user-avatar">
							{/* <img src="https://i.pravatar.cc/100" alt="ng_khanhduy_" /> */}
							<img src={data.avatar} alt={data.nickname} />
						</div>
						<div className="Post-user-nickname">
							<span> {data.nickname} </span>
						</div>
					</div>
				</header>

				{/* Image of post */}
				<div className="Post-image">
					<img alt="Icon Living" src={data.image} />
				</div>
                
				{/* Post caption */}
				<div className="Post-caption">
					<p>{data.caption}</p>
				</div>
			</article>
		);
	}
}

export default Post;
