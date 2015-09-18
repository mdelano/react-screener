var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Gallery = React.createClass({

    render: function() {
        
        var thumbnails = this.props.projects.map(function(project, index) {
            return (
                <Col xs={6} md={4} lg={4}>
                    <a href={project.Ref} className="showsmallthumb">
                        <img src={project.Thumbnail} />
                        <div className="thumbtitle">{project.Title}</div>
                    </a>
                </Col>
            )
        })
        
        return (
            <div style={{padding:"20px"}}>
                <Row>
                    <Col xs={12}>
                        <span className="category">Your Screeners &gt;</span>
                    </Col>
                </Row>
                <Grid>
                    <Row>
                        {thumbnails}
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = Gallery;
