import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Post from './Components/Post/Post';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataPost: [
				{
					nickname: '_khanhduy_ng',
					avatar: 'https://i.pravatar.cc/100?img=6',
					image: 'https://picsum.photos/800/400?random=1',
					caption:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deleniti! Aspernatur illo et, minus',
				},
				{
					nickname: '_.nanana._',
					avatar: 'https://i.pravatar.cc/100?img=3',
					image: 'https://picsum.photos/800/400?random=2',
					caption:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deleniti! Aspernatur illo et, minus',
				},
				{
					nickname: '_hr_doppp',
					avatar: 'https://i.pravatar.cc/100?img=7',
					image: 'https://picsum.photos/800/400?random=3',
					caption:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deleniti! Aspernatur illo et, minus',
				},
			],
		};
	}
	render() {
		const elePost = this.state.dataPost.map((data, index) => {
			return <Post key={index} data={data} />;
		});
		return (
			<div className="App">
				<Header />
				{elePost}
			</div>
		);
	}
}

export default App;
