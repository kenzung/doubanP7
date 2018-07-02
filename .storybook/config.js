import { configure, storiesOf } from '@storybook/react';
import React from 'react';
import NavigationBar from '../src/components/NavigationBar';
import HotTap from '../src/pages/home/children/HotTab';
import { MemoryRouter } from 'react-router';
import ArticleListItem from '../src/pages/home/children/ArticleList/ArticleListItem';
import Cell from '../src/components/Collection/Cell';
import Collection from '../src/components/Collection';
import HotFlow from '../src/components/HotFlow';
import {movieHotFlow, movieSort} from '../src/data/constData.js';
import Sort from '../src/components/Sort';
import DownloadBar from '../src/components/DownloadBar';
import Summary from '../src/components/Summary';
import Channel from '../src/components/Channel';
import '../src/common/style/common.css';
import ChannelItem from '../src/components/Channel/ChannelItem';
import Commentary from '../src/components/Commentary';
import Mark from '../src/components/Mark';
import Brief from '../src/components/Brief';
import SearchItem from '../src/pages/search/SearchItem';

function loadStories() {
    storiesOf('导航', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('navigation bar', () => (<NavigationBar />));

    storiesOf('首页', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('hot tap', () => (<HotTap />));

    storiesOf('首页', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('首页列表项', () => (<ArticleListItem />));

    // storiesOf('collection', module).addDecorator(story => (
    //     <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // )).add('collection item(有分数10)', () => (<Cell score={10} title={'好看电影112312'}/>))
    //     .add('collection item(有分数7.2)', () => (<Cell score={7.2} title={'好看电影112312'}/>))
    //     .add('collection item(有分数5.8)', () => (<Cell score={5.8} title={'好看电影112312'}/>))
    //     .add('collection item(无分数)', () => (<Cell score={0} title={'好看电影2'}/>))
    //     .add('collection', () => (<Collection title={'热门电影'}/>));


    storiesOf('hot tab collection', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('电影hot tab', ()=>(<HotFlow title="发现好电影" hotFLows={movieHotFlow}/>));

    storiesOf('分类链接', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('电影分类链接',()=>(<Sort sortItems={movieSort}/>));

    storiesOf('下载引导导航', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('downloadBar',()=>(<DownloadBar/>));

    storiesOf('基本信息', module).add('电影简介',()=>(<Summary />));

    let channelArr = ['热血','国产','经典动漫','热血','国产','经典动漫','热血','国产','经典动漫','热血','国产','经典动漫'];
    storiesOf('频道', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('频道Item 小说',()=>(<ChannelItem title="小说"/>))
    .add('频道 电影',()=>(<Channel channel={channelArr}/>));

    storiesOf('评论', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('评论 普通',()=>(<Commentary/>));

    const marks = ['想看','看过'];
    storiesOf('标记', module).addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('标记',()=>(<Mark marks={marks}/>));

    const brief = `原作コミックス「カードキャプターさくら クリアカード編」第3巻DVD付き特装版の発売が決定しました。2018年1月からのTVアニメ放送に先駆けて、「さくら」の新作アニメーションが「封印解除」――！PVも公開中です。「さくらカード編」と「クリアカード編」をつなぐストーリー、ぜひご期待ください。`;
    storiesOf('简介',module).add('简介',()=>(<Brief title={'魔卡少女樱透明牌篇序章小樱与两只小熊'} brief={brief}/>))

    storiesOf('搜索页Item').addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    )).add('电影搜索',()=>(<SearchItem title="电影" subTitle="影院热播" titleColor="#2384e8"/>));
}

configure(loadStories, module);