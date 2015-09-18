var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PosterFrameSlide = require('./PosterFrameSlide');
var Carousel = ReactBootstrap.Carousel;
var CarouselItem = ReactBootstrap.CarouselItem;
var Gallery = require('./Gallery');

var PosterFrameSlider = React.createClass({

    render: function() {
        
        this.props.projects = [
            {
                PosterFrame : "http://ib.huluim.com/assets/new-mastheads/empire_key_fox_hub.png?size=1600x600",
                Thumbnail: "https://mediasilo.imagefly.io/w_300,h_168/http://ib.huluim.com/assets/new-mastheads/empire_key_fox_hub.png?size=1600x600",
                Ref: "http://google.com",
                Title: "Empire",
                Description: "A sexy and powerful new drama about the head of a music empire whose three sons and wife all battle for his throne. Set to an original soundtrack written and produced by hip-hop hitmaker Timbaland."
            },
            {
                PosterFrame : "http://ib.huluim.com/assets/new-mastheads/mh-intervention-v1.jpg?size=1600x600",
                Thumbnail: "https://mediasilo.imagefly.io/w_300,h_168/http://ib.huluim.com/assets/new-mastheads/mh-intervention-v1.jpg?size=1600x600",
                Ref: "http://google.com",
                Title: "Intervention",
                Description: "Intervention is a gripping series in which people confront their darkest demons and seek a route to redemption. The show profiles people whose dependence on drugs or other compulsive behavior has brought them to a point of personal crisis"
            }
        ]
        
        var carouselItems = this.props.projects.map(function(project, index) {
            return (
                <CarouselItem>
                    <img width={"120%"} alt="900x500" src={ project.PosterFrame }/>
                    <div className="show" style={{lineHeight: "1.42"}}>
                        <div className="carousel-caption" style={{textAlign:"left", left:"7.5%", width:"50%"}}>
                            <h1 className="headline" style={{fontSize:"4em", paddingBottom: "10px"}}>{ project.Title }</h1>
                            <div className="description" style={{lineHeight: "1.5"}}>{ project.Description }</div>
                        </div>
                    </div>
                </CarouselItem>
            );
        });
        
        return (
            <div>
                <Carousel>
                    {carouselItems}
                </Carousel>
                <Gallery projects={this.props.projects}/>
            </div>
        );
    }
});

module.exports = PosterFrameSlider;
