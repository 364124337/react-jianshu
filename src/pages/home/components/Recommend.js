import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map(item => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)