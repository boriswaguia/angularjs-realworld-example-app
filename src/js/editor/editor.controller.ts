class EditorCtrl {
  static $inject = ['Articles', 'article', '$state'];
  _Articles: any;
  _$state: any;
  article: any;
  isSubmitting: boolean;
  errors: any;
  tagField: any;

  constructor(Articles, article, $state) {
    'ngInject';

    this._Articles = Articles;
    this._$state = $state;

    if (!article) {
      this.article = {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    } else {
      this.article = article;
    }

  }

  addTag() {
    if (this.article.tagList && !this.article.tagList.includes(this.tagField)) {
      this.article.tagList.push(this.tagField);
      this.tagField = '';
    }
  }

  removeTag(tagName) {
    this.article.tagList = this.article.tagList.filter((slug) => slug != tagName);
  }

  submit() {
    this.isSubmitting = true;

    this._Articles.save(this.article).then(
      (newArticle) => {
        this._$state.go('app.article', { slug: newArticle.slug });
      },

      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }

    )
  }



}


export default EditorCtrl;
