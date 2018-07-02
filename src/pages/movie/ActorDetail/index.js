import React from 'react';
import {actorInfo} from '../../../network/movie';
import Summary from '../../../components/Summary';
import Collection from '../../../components/Collection';
import {Cell,CellRating} from '../../../components/Collection/Cell';

export default class ActorDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            actor:null
        }
    }

    componentDidMount(){
        actorInfo(this.props.match.params.id).then((res)=>(res.json()))
        .then((json)=>{
            this.setState({
                actor:json
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    assembleBrief(actor){
        let brief = `性别：${actor.gender} 出生地：${actor.born_place}`;
        let akaEn = actor.aka_en && ` 更多英文名：${actor.aka_en.join('/')}`;
        let akaZh = actor.aka && ` 更多中文名：${actor.aka.join('/')}`;
        return `${brief}${akaZh}${akaEn}`;
    }

    render(){
        const actorDetail = this.state.actor;
        if(actorDetail){
            const actorName = actorDetail.name_en ? `${actorDetail.name} - ${actorDetail.name_en}`: actorDetail.name;
            return (
                <section className="content-body">
                    <Summary 
                    title={actorName}
                    img={actorDetail.avatars && actorDetail.avatars.medium}
                    intro={this.assembleBrief(actorDetail)}>
                    </Summary>
                    <Collection title="个人作品">
                        {
                            actorDetail.works.map((movie,index)=>(
                                <Cell url={`/movie/${movie.subject.id}`} image={movie.subject.images.small} title={movie.subject.title}>
                                    <CellRating score={movie.subject.rating.average}/>
                                </Cell>
                            ))
                        }
                    </Collection>
                </section>
            );
        }else{
            return (
                <section className="content-body">
                </section>
            );
        }
    }
}