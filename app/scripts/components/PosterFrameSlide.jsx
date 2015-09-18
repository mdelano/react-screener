var React = require('react');

var PosterFrameSlide = React.createClass({

    render: function() {
        return (
            <div class="show">
                <a href={this.props.Ref}><img style={{verticalAlign: "middle", width: "1333px", height: "500px"}} src={this.props.PosterFrame} /></a>
                <div style={{position: "absolute", width: "445px", height: "300px", top: "300px", left: "75px"}}>
                    <div className="headline" style={{opacity: 1}}>{this.props.Title}</div>
                    <div className="description" style={{opacity: 1}}>{this.props.Description}</div>
                </div>
            </div>
        );
    }
});

module.exports = PosterFrameSlide;
