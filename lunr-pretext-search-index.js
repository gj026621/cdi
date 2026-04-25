var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-notion-limite",
  "level": "1",
  "url": "sec-notion-limite.html",
  "type": "Section",
  "number": "1.1",
  "title": "Notion de limite",
  "body": " Notion de limite  "
},
{
  "id": "sec-ex-limites",
  "level": "1",
  "url": "sec-ex-limites.html",
  "type": "Section",
  "number": "1.2",
  "title": "Exercices",
  "body": " Exercices  "
},
{
  "id": "sec-definition",
  "level": "1",
  "url": "sec-definition.html",
  "type": "Section",
  "number": "2.1",
  "title": "Définition de la dérivée",
  "body": " Définition de la dérivée   "
},
{
  "id": "sec-ex-derivee",
  "level": "1",
  "url": "sec-ex-derivee.html",
  "type": "Section",
  "number": "2.2",
  "title": "Exercices",
  "body": " Exercices     Dérivez en utilisant la définition de la dérivée.          "
},
{
  "id": "sec-ex-derivee-2-1",
  "level": "2",
  "url": "sec-ex-derivee.html#sec-ex-derivee-2-1",
  "type": "Exercice",
  "number": "2.2.1",
  "title": "",
  "body": "  Dérivez en utilisant la définition de la dérivée.        "
},
{
  "id": "sec-taux",
  "level": "1",
  "url": "sec-taux.html",
  "type": "Section",
  "number": "3.1",
  "title": "Taux liés",
  "body": " Taux liés  "
},
{
  "id": "sec-ex-applications-derivee",
  "level": "1",
  "url": "sec-ex-applications-derivee.html",
  "type": "Section",
  "number": "3.2",
  "title": "Exercices",
  "body": " Exercices     Un bel énoncé ici.    Une indication.    La réponse.    La solution détaillée.     "
},
{
  "id": "sec-ex-applications-derivee-2-1",
  "level": "2",
  "url": "sec-ex-applications-derivee.html#sec-ex-applications-derivee-2-1",
  "type": "Exercice",
  "number": "3.2.1",
  "title": "",
  "body": "  Un bel énoncé ici.    Une indication.    La réponse.    La solution détaillée.   "
},
{
  "id": "ch-integrale-indefinie",
  "level": "1",
  "url": "ch-integrale-indefinie.html",
  "type": "Chapitre",
  "number": "4",
  "title": "Intégrale indéfinie",
  "body": " Intégrale indéfinie  "
},
{
  "id": "ch-integrale-definie",
  "level": "1",
  "url": "ch-integrale-definie.html",
  "type": "Chapitre",
  "number": "5",
  "title": "Intégrale définie",
  "body": " Intégrale définie  "
},
{
  "id": "ch-techniques",
  "level": "1",
  "url": "ch-techniques.html",
  "type": "Chapitre",
  "number": "6",
  "title": "Techniques d’intégration avancées",
  "body": " Techniques d'intégration avancées  "
},
{
  "id": "ch-applications-integrale",
  "level": "1",
  "url": "ch-applications-integrale.html",
  "type": "Chapitre",
  "number": "7",
  "title": "Applications de l’intégrale",
  "body": " Applications de l'intégrale  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Ce livre a été rédigé avec PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
