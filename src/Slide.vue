<template>
<Keynote>
<!-- Slide One -->
<Slide animation="flip">
	<div class="slide slide-photo-title vertical right">
		<img src="./assets/django-600x600-600x458.png" class="photo">
		<div class="body">
  			<TitleSlide title="Aspectos Basicos de Django" animation="slide-right" subtitle="">
  			</TitleSlide>
  			<div class="top-right">
  					<h3>Autores</h3>
      				Alexander Jose Rodriguez Duven<br>
      				Naudy Linarez

  			</div>
		</div>
</div>

</Slide>  
<!-- // Slide One -->

<Slide animation="flip">
	<div class="slide slide-photo-title vertical left">
		<img src="./assets/python-logo.jpg" class="photo">
		<div class="body">
  			<TitleSlide title="Que es?" animation="slide-left" subtitle="Es un framework web de alto nivel que fomenta el desarrollo rápido y el diseño limpio y pragmático, su nucleo esta compuesto por el lenguaje Python.">
  			</TitleSlide>
		</div>
</div>
</Slide>
  <PhotoTitleSlide photo="assets/logo.png" title="An unsplash photo" vertical left
                   animation="slide-right">
    There is a random unsplash photo at top.
  </PhotoTitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=2" title="A vertical photo" vertical
                   animation="slide-right">
    There is a random unsplash photo on right.
  </PhotoTitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=3" title="A vertical photo" vertical left
                   animation="slide-right">
    There is a random unsplash photo on left.
  </PhotoTitleSlide>
  <PhotoSlide photo="https://unsplash.it/1200/800?random=4" animation="slide-right"/>
  <TitleSlide title="Slide In - Right" animation="slide-right" class="top-left">
    Text in Top Left
  </TitleSlide>
  <TitleSlide title="Slide In - Bottom" animation="slide-bottom" class="bottom-right">
    Text in Bottom Right
  </TitleSlide>
  <TitleSlide title="Slide In - Left" animation="slide-left" class="top-right">
    Text in Top Right
  </TitleSlide>
  <TitleSlide title="Rotate In" animation="rotate" class="bottom-left">
    Text in Bottom Left
  </TitleSlide>
  <TitleSlide title="Fade In" animation="fade" class="center-right">
    Text in Center Right
  </TitleSlide>
  <TitleSlide title="Markdown" animation="rotate">
    <Markdown>
      # Heading

      ```js
      // code
      new Vue({ el: '#app' })
      ```
    </Markdown>
  </TitleSlide>
  <TitleSlide title="Flip" subtitle="Be expressive with Vue.js" animation="flip">
    In center! <br>
    (by default) <br>
    Be expressive with Vue.js
  </TitleSlide>
  <Slide>
    <Markdown v-pre>
      ```html
      &lt;div&gt;Hello {{ name }}&lt;/div&gt;
      ```
    </Markdown>

    <Markdown>
      ```js
      render (h) {
      return h('div', 'Hello ' + this.name)
      }
      ```
    </Markdown>

    <Markdown>
      ```jsx
      render (h) {
        return (&lt;div&gt;Hello {this.name}&lt;/div&gt;)
      }
      ```
    </Markdown>
  </Slide>
  <Slide animation="flip" class="no-margin">
    <iframe width="100%" height="100%" src="//jsfiddle.net/znck/phetsvbz/embedded/" allowfullscreen="allowfullscreen"
            frameborder="0"></iframe>
  </Slide>
  <AuthorSlide photo="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" name="Author Name"
               animation="slide-right">
    Developer, Foo Company
  </AuthorSlide> 
</Keynote>

</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style src="../node_modules/vue-keynote/dist/vue-keynote.css"></style>