import React, { Component } from 'react';
import axios from 'axios'

import './styles.scss'

class ActivityTracker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			transitionIn: false,
			currentActivity: { },
		};

		// bind functions
		this.getCurrentActivity = this.getCurrentActivity.bind(this)
		this.dismissNotification = this.dismissNotification.bind(this)
		this.lastUpdated = this.lastUpdated.bind(this)

	}

	componentDidMount() {
		this.getCurrentActivity()

	}

	getCurrentActivity() {
		const CORSBridge = "https://cors-anywhere.herokuapp.com";

		axios.get(`${ CORSBridge }/https://dg-activity-tracker.herokuapp.com/api/activities/current`)
			.then( (resp) => resp.data )
			.then( ( activity ) => {
				this.setState( {
					transitionIn: true,
					currentActivity : activity[0]
				})
			})
			.catch(( error ) => {
				console.error(error);
			});

	}


	dismissNotification() {
		this.setState({
			...this.state,
			transitionIn: false
		})
	}

	lastUpdated() {
		const msPerMinute= 1000 * 60
		const dc = new Date( this.state.currentActivity.createDate )
		const dn = new Date()
		const normalizedDateCreated = Date.UTC( dc.getFullYear(), dc.getMonth(), dc.getDate(), dc.getHours(), dc.getMinutes())
		const nomalizedDateNow = Date.UTC( dn.getFullYear(), dn.getMonth(), dn.getDate(), dn.getHours(), dn.getMinutes() )
		const mins = Math.floor( ( nomalizedDateNow - normalizedDateCreated ) / msPerMinute )
		const hours = Math.floor( mins / 60 )
		const days = Math.floor( hours/ 24 )
		const weeks = Math.floor( days / 7 )
		const months = Math.floor( weeks / 4 )
		const years = Math.floor( months / 12 )

		/* Format time string */
		let formatTime = ( type, qty ) => {
			return `Updated: ${ qty || 1 } ${ qty > 1 ? type + 's' : type } ago`
		}

		if ( years ) {
			return formatTime( "year", years )
		} else if ( months ) {
			return formatTime( "month", months )
		} else if ( weeks ) {
			return formatTime( "week", weeks )
		} else if ( days ) {
			return formatTime( "day", days )
		} else if ( hours ){
			return formatTime( "hour", hours )
		} else {
			return formatTime( "min", mins )
		}
	}

	render() {
		const activitySummary = (
			<div className="summary-container ">
				<div className="graphic">
					{ this.state.currentActivity.emoji }
				</div>
				<div className="summary">
					<h2>What am I up to?</h2>
					<p>{ this.state.currentActivity.summary }</p>
					<span className="time-tracker">{ this.state.currentActivity.createDate ? this.lastUpdated() : null }</span>
				</div>
			</div>
		)

		return (
			<div className={ `activity-tracker ${ this.state.transitionIn ? "in" : "out" }` }>
					{
						this.state.currentActivity.link ?
							<a href={ this.state.currentActivity.link } target="_blank" rel="noopener noreferrer">
								{ activitySummary }
							</a>
							: activitySummary
					}
				<button className="dismiss" onClick={ this.dismissNotification }>
					Cool
				</button>
			</div>

		);
	}
}

export default ActivityTracker;
