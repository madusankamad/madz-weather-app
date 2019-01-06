import React from "react";
import {connect} from "react-redux";
import {Button, Container, Grid} from "semantic-ui-react";
import {changeActiveGraph} from "../../_actions/filterActions";
import {GRAPH_TYPES} from "../../Const/CONSTANTS";

import _ from "lodash";

const GraphFilter = (props) => {

    return (<Container style={{position: 'relative', top: 80}} className='graph-filter'>
        <Grid>
            <Grid.Row >{
                _.keys(GRAPH_TYPES).map((key, index) => (
                        <Button key={index} disabled={GRAPH_TYPES[key].selector === props.selectedGraphType}
                                onClick={(evt) => props.selectGraph(GRAPH_TYPES[key].selector)}>
                            {GRAPH_TYPES[key].label}
                        </Button>
                    )
                )
            }
            </Grid.Row>
        </Grid>
    </Container>)
};


const mapStateToProps = (state) => {
    return {
        selectedGraphType: state.filters.selectedGraphType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        selectGraph: (graphType) => {
            dispatch(changeActiveGraph(graphType))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GraphFilter);
