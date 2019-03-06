import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { CharacterList } from '../components';
// import actions
import { getChar } from '../actions';

class CharacterListView extends React.Component {
	componentDidMount() {
		// call our action
		this.props.getChar();
	}

	render() {
		//console.log(this.props);
		if (this.props.fetching) {
			return (
				<div style={{ textAlign: 'center' }}>
					<Loader type="Puff" color="#00BFFF" height="100" width="100" />
				</div>
			);
		}

		if (this.props.error) {
			return (
				<div style={{ textAlign: 'center' }}>
					<p>{this.props.error}</p>
				</div>
			);
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.isLoading,
		error: state.charsReducer.error
	};
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
	getChar
})(CharacterListView);
