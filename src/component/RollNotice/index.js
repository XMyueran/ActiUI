import React, { PropTypes,Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './notice.less'

class RollNotice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: null
        };
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidMount() {
        if (this.props.data) {
            this.start()
        }
    }
    start() {
        const _that = this
        let i = 0
        _that.timer = setInterval(function() {
            i == _that.props.data.length-1 ? i = 0 : i++ 
            _that.setState({
                word:  _that.props.data[i]
            })
            
        }, 4000)
        
    }
    render() {  
        const inner = (<span className={style.inner} key={this.state.word} >{this.state.word}</span>)
        const horn = (
            <svg className={style.icon} viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg" width="200.1953125" height="200">
                <path d="M843.595596 514.05005c0-94.302302-51.251251-176.816817-127.103104-221.405405-3.587588-2.05005-11.787788-5.125125-17.425425-5.125125-16.912913 0-30.750751 13.837838-30.750751 30.75075 0 11.275275 6.15015 21.525526 15.375376 26.650651 58.938939 33.313313 98.402402 96.864865 98.402402 169.129129 0 73.801802-41.001001 137.865866-101.477477 171.179179-8.712713 5.125125-14.862863 15.375375-14.862863 26.138138 0 16.912913 13.837838 30.750751 30.750751 30.750751 7.175175 0 15.887888-4.1001 15.887887-4.1001 78.414414-44.076076 131.203203-127.615616 131.203204-223.967968z m-35.363364-376.696697c-5.637638-3.587588-11.275275-6.15015-18.45045-6.15015-16.912913 0-30.238238 13.837838-30.238238 30.238238 0 12.3003 7.175175 22.038038 17.425425 27.163164 111.727728 65.089089 187.067067 186.554555 187.067067 324.932933 0 138.890891-75.339339 259.843844-186.554555 324.932932-9.737738 5.125125-18.45045 15.375375-18.45045 27.675676 0 16.912913 13.837838 30.238238 30.238238 30.238238 6.662663 0 12.3003-2.562563 17.937938-6.15015 129.665666-75.851852 216.792793-216.28028 216.792793-377.209209 0.512513-159.391391-86.614615-299.81982-215.767768-375.671672z m-727.255255 165.029029h151.191191c19.987988 0 51.251251-8.2002 186.554555-107.115115 24.088088-17.425425 47.663664-35.363363 68.164164-50.738738l0.512512 398.734734c0 16.912913 13.837838 30.750751 30.750751 30.750751s30.750751-13.837838 30.750751-30.750751c0-3.075075-1.537538-452.548549-1.537538-452.548548 0-14.35035-8.2002-27.163163-21.013013-33.313314-12.812813-6.15015-28.188188-4.612613-38.950951 4.612613-0.512513 0.512513-54.838839 43.563564-114.802802 87.63964-104.552553 76.876877-134.790791 89.68969-140.940941 91.739739h-199.367368c-16.912913 0-30.238238 13.837838-30.238238 30.238239V757.493493c0 16.912913 13.837838 30.238238 30.238238 30.238239h223.967968c6.15015 2.05005 34.850851 15.375375 127.103103 90.714714 53.813814 44.076076 101.98999 86.614615 102.502503 87.127128 7.175175 6.15015 15.887888 9.225225 24.6006 9.225225 5.125125 0 10.25025-1.025025 15.375376-3.075075 13.325325-6.15015 22.038038-18.962963 22.038038-33.825826v-170.666667-2.562562c-1.025025-15.887888-14.35035-28.188188-30.238238-28.188189-16.912913 0-30.750751 13.837838-30.750751 30.750751 0 1.537538 0.512513 111.727728 0.512512 111.727728-16.4004-13.837838-34.850851-29.213213-53.301301-44.076076-123.515516-99.93994-154.266266-108.652653-174.766767-108.652653H89.177177c-21.525526 0-26.138138-6.15015-26.138138-27.675675v-373.10911c-1.537538-13.837838 0-23.063063 17.937938-23.063063z" fill={this.props.color}></path>
            </svg>
        )
        return (
            <div  className={style.content} style={{color:this.props.color}}>
                {/*<i className={style.horn}></i>*/}
                { horn }
                <ReactCSSTransitionGroup 
                    className={style.box}
                    transitionName="example" 
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout={500}
                    >
                    { inner }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

RollNotice.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string
}

RollNotice.defaultProps = {
    data: ['none'],
    color: '#000'
}

export default RollNotice