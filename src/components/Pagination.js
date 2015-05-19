var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		pagination: React.PropTypes.shape({
			currentPage: React.PropTypes.number,
			first:       React.PropTypes.number,
			last:        React.PropTypes.number,
			next:        React.PropTypes.bool,
			pages:       React.PropTypes.array,
			previous:    React.PropTypes.bool,
			total:       React.PropTypes.number,
			totalPages:  React.PropTypes.number
		})
	},
	renderCount() {
		return (
			<div className="Pagination__count">
				<span className="Pagination__count__text">Showing</span>
				<span className="Pagination__count__text">{this.props.pagination.first}</span>
				<span className="Pagination__count__text">to</span>
				<span className="Pagination__count__text">{this.props.pagination.last}</span>
				<span className="Pagination__count__text">of</span>
				<span className="Pagination__count__text">{this.props.pagination.total}</span>
			</div>
		);
	},
	renderList() {
		if (!this.props.pagination.pages) return 'No pages...';

		var self = this;

		var pages = this.props.pagination.pages.map(function(page) {
			var className = classNames('Pagination__list__item', {
				'is-selected': self.props.pagination.currentPage === page
			});
			return <button key={'page_' + page} className={className} onClick={self.props.onClick}>{page}</button>;
		});
		
		return (
			<div className="Pagination__list">
				{pages}
			</div>
		);
	},
	render() {
		// props
		var props = blacklist(this.props, ['className']);

		
		// classes
		var componentClass = classNames('Pagination', this.props.className);
		props.className = componentClass;

		return (
			<div {...props}>
				{this.renderCount()}
				{this.renderList()}
			</div>
		);
	}
});
