import React, { Component } from 'react';
import { AppContext } from '../../components/header/header';
import { authorCheck } from '../../utils';
import './article.css';

// TODO:  join all news array here (preview + featured), add final title, image

/**
 * Container for Article
 * Contains the article
 * @class
 */
class Article extends Component {
 
  test(val) {

    if (val.isLoaded) {
      let id = this.props.location.pathname;
      id = id.replace('/article/','');

      val.previewArray.push(val.featured);

      const articleData = 
        val.previewArray.find(
          (item) => {return  item.id === id}
        )
      console.log(articleData);
      return (
        <div className="article__wrapper">

          {authorCheck(articleData.webTitle, true)}
          <p>Tags: {articleData.sectionName} </p>

          <picture>
            <source media="(min-width: 769px)" srcSet={require("../../assets/news-placeholder.png")}/>
            <source media="(min-width: 1107px)" srcSet={require("../../assets/news-placeholder.png")}/>
            <img className="article__img" src={require("../../assets/news-placeholder.png")} alt="Place Holder"/>
          </picture>

          

          <p className="article__paragraph">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum at elit sed maximus. Donec sed nulla malesuada, placerat magna a, ultricies libero. Duis eu neque scelerisque, aliquam ante quis, finibus ex. Mauris urna est, sollicitudin at nibh at, commodo placerat massa. Vivamus lacinia tellus ut lacinia rutrum. Curabitur quam ipsum, luctus a augue quis, ultricies egestas orci. Sed tristique, dolor a malesuada pellentesque, turpis leo finibus massa, ac volutpat eros libero eget odio. Suspendisse accumsan consequat neque sit amet fermentum. Curabitur pulvinar eros in sapien accumsan lobortis quis id mauris. Duis a massa consequat, iaculis ligula eget, facilisis sem. Donec id nisl eget dolor vestibulum iaculis. Donec iaculis, tellus vitae ultricies interdum, lacus massa commodo augue, id consectetur velit felis a sapien.
          </p>
          <p className="article__paragraph">
            Pellentesque enim sem, mattis at blandit a, malesuada sed urna. Nullam auctor condimentum sem bibendum condimentum. Proin efficitur eu dui eu congue. Suspendisse suscipit lectus at quam vehicula, ac lacinia metus egestas. Sed sed metus ligula. Suspendisse potenti. Suspendisse sed porta erat. Vivamus vel bibendum ex. Praesent molestie, odio tristique dignissim accumsan, metus risus aliquam nunc, nec dignissim risus odio ac metus. Sed sagittis, lacus at scelerisque vestibulum, mauris felis maximus ipsum, vel ultrices mauris nibh at orci.
          </p>
          <p className="article__paragraph">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eleifend sem sed maximus tincidunt. Ut varius porta nibh nec aliquet. Nam id lacus non turpis vehicula convallis eget vel tellus. Donec sollicitudin volutpat nunc, sed luctus sapien varius nec. Nulla facilisi. Suspendisse vulputate, neque ut bibendum maximus, tortor lacus vestibulum ligula, nec pretium mauris sapien sit amet neque. Donec dictum lorem eu tortor vehicula imperdiet. Duis tellus est, pharetra quis ligula vitae, laoreet sodales nisi. In faucibus nunc eu dapibus tincidunt. Aliquam ultricies justo sed iaculis sollicitudin. In semper purus dui, ut varius arcu scelerisque nec.
          </p>
          <p className="article__paragraph">
            Nunc tincidunt laoreet libero at eleifend. Nullam et libero congue, consequat urna porta, consequat lacus. Vivamus a dapibus massa. Fusce condimentum pretium mi at dignissim. Nunc non pretium nibh. Praesent id sapien aliquam, iaculis velit et, euismod magna. Fusce convallis, arcu non sollicitudin facilisis, sapien felis commodo leo, ac facilisis dui nibh ut felis. Morbi consequat fermentum tincidunt.
          </p>

        </div>
      );
    }

    return (
      <div className="container">
        <div className="homepage__content-wrapper">
          <p>Something went wrong :( . </p>
        </div>
    </div>
    );
  }

  render() {
      return (
        <div className="container">
            
          <AppContext.Consumer>

            {(context) => { return this.test(context) }}

          </AppContext.Consumer>

        </div>
      );
  }
}

export default Article;
