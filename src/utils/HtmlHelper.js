class HtmlHelper {
  static getHtml(html) {
    if (html) {
      return (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style type="text/css">
          /* Github Markdown CSS */
          .markdown code {
            padding: 0.2em 0;
            margin: 0;
            font-size: 85%;
            background-color: rgba(0, 0, 0, 0.04);
            border-radius: 3px;
          }
      
          .markdown code:before,
          .markdown code:after {
            letter-spacing: -0.2em;
            content: "\\00a0";
          }
      
          .markdown pre > code {
            padding: 0;
            margin: 0;
            font-size: 100%;
            word-break: normal;
            white-space: pre;
            background: transparent;
            border: 0;
          }
      
          .markdown .highlight {
            margin-bottom: 16px;
          }
      
          .markdown .highlight pre,
          .markdown pre {
            padding: 16px;
            overflow: auto;
            font-size: 85%;
            line-height: 1.45;
            background-color: #f7f7f7;
            border-radius: 3px;
          }
      
          .markdown .highlight pre {
            margin-bottom: 0;
            word-break: normal;
          }
      
          .markdown pre {
            word-wrap: normal;
          }
      
          .markdown pre code {
            display: inline;
            max-width: initial;
            padding: 0;
            margin: 0;
            overflow: initial;
            line-height: inherit;
            background-color: transparent;
            border: 0;
          }
      
          .markdown pre code:before,
          .markdown pre code:after {
            content: normal;
          }
      
          .markdown kbd {
            display: inline-block;
            padding: 3px 5px;
            font-size: 11px;
            line-height: 10px;
            color: #555;
            vertical-align: middle;
            background-color: #fcfcfc;
            border: solid 1px #ccc;
            border-bottom-color: #bbb;
            border-radius: 3px;
            box-shadow: inset 0 -1px 0 #bbb;
          }
      
          .markdown .pl-c {
            color: #969896;
          }
      
          .markdown .pl-c1,
          .markdown .pl-s .pl-v {
            color: #0086b3;
          }
      
          .markdown .pl-e,
          .markdown .pl-en {
            color: #795da3;
          }
      
          .markdown .pl-s .pl-s1,
          .markdown .pl-smi {
            color: #333;
          }
      
          .markdown .pl-ent {
            color: #63a35c;
          }
      
          .markdown .pl-k {
            color: #a71d5d;
          }
      
          .markdown .pl-pds,
          .markdown .pl-s,
          .markdown .pl-s .pl-pse .pl-s1,
          .markdown .pl-sr,
          .markdown .pl-sr .pl-cce,
          .markdown .pl-sr .pl-sra,
          .markdown .pl-sr .pl-sre {
            color: #183691;
          }
      
          .markdown .pl-v {
            color: #ed6a43;
          }
      
          .markdown .pl-id {
            color: #b52a1d;
          }
      
          .markdown .pl-ii {
            background-color: #b52a1d;
            color: #f8f8f8;
          }
      
          .markdown .pl-sr .pl-cce {
            color: #63a35c;
            font-weight: bold;
          }
      
          .markdown .pl-ml {
            color: #693a17;
          }
      
          .markdown .pl-mh,
          .markdown .pl-mh .pl-en,
          .markdown .pl-ms {
            color: #1d3e81;
            font-weight: bold;
          }
      
          .markdown .pl-mq {
            color: #008080;
          }
      
          .markdown .pl-mi {
            color: #333;
            font-style: italic;
          }
      
          .markdown .pl-mb {
            color: #333;
            font-weight: bold;
          }
      
          .markdown .pl-md {
            background-color: #ffecec;
            color: #bd2c00;
          }
      
          .markdown .pl-mi1 {
            background-color: #eaffea;
            color: #55a532;
          }
      
          .markdown .pl-mdr {
            color: #795da3;
            font-weight: bold;
          }
      
          .markdown .pl-mo {
            color: #1d3e81;
          }
      
          .markdown kbd {
            display: inline-block;
            padding: 3px 5px;
            font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
            line-height: 10px;
            color: #555;
            vertical-align: middle;
            background-color: #fcfcfc;
            border: solid 1px #ccc;
            border-bottom-color: #bbb;
            border-radius: 3px;
            box-shadow: inset 0 -1px 0 #bbb;
          }
      
          /**
           * yue.css
           *
           * yue.css is designed for readable content.
           *
           * Copyright (c) 2013 - 2014 by Hsiaoming Yang.
           */
      
          body {
            font-family: "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
            color: #444443;
          }
      
          .markdown h1,
          .markdown h2,
          .markdown h3,
          .markdown h4,
          .markdown h5,
          .markdown h6,
          .markdown h1,
          .markdown h2,
          .markdown h3,
          .markdown h4,
          .markdown h5,
          .markdown h6 {
            font-family: "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", "SimSun", sans-serif;
            color: #222223;
            -webkit-user-select: auto;
          }
      
          .markdown h1 {
            font-size: 1.8em;
            margin: 0.67em 0;
          }
      
          .markdown h1,
          .markdown > h1 {
            margin-top: 0;
            font-size: 1.8em;
            text-align: center;
          }
      
          .item .markdown h2,
          .markdown h2,
          .markdown h2 {
            font-size: 1.5em;
            margin: 0.83em 0;
          }
      
          .markdown h3,
          .markdown h3 {
            font-size: 1.17em;
            margin: 1em 0;
          }
      
          .markdown h4,
          .markdown h5,
          .markdown h6,
          .markdown h4,
          .markdown h5,
          .markdown h6 {
            font-size: 1em;
            margin: 1.6em 0 1em 0;
          }
      
          .markdown h6 {
            font-weight: 500;
          }
      
          .item .markdown p,
          .markdown.item  p {
            font-size: 1em;
            color: #000;
          }
      
          .markdown p {
            font-size: 1em;
            margin: 0 0.2em 1.46em;
            -webkit-user-select: auto;
          }
      
          .markdown a {
            color: #111;
            word-wrap: break-word;
            -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
            text-decoration-color: rgba(0, 0, 0, 0.4);
          }
      
          .markdown a:hover {
            color: #555;
            -moz-text-decoration-color: rgba(0, 0, 0, 0.6);
            text-decoration-color: rgba(0, 0, 0, 0.6);
          }
      
          .markdown h1 a,
          .markdown h2 a,
          .markdown h3 a {
            text-decoration: none;
          }
      
          .markdown strong,
          .markdown b {
            font-weight: 700;
            color: #222223;
          }
      
          .markdown em,
          .markdown i {
            font-style: italic;
            color: #222223;
          }
      
          .markdown img {
            max-width: 100%;
            height: auto;
            margin: 0.2em 0;
          }
      
          .markdown a img {
            /* Remove border on IE */
            border: none;
          }
      
          .markdown figure {
            position: relative;
            clear: both;
            outline: 0;
            margin: 10px 0 30px;
            padding: 0;
            min-height: 100px;
          }
      
          .markdown figure img {
            display: block;
            max-width: 100%;
            margin: auto auto 4px;
            box-sizing: border-box;
          }
      
          .markdown figure figcaption {
            position: relative;
            width: 100%;
            text-align: center;
            left: 0;
            margin-top: 10px;
            font-weight: 400;
            font-size: 14px;
            color: #666665;
          }
      
          .markdown figure figcaption a {
            text-decoration: none;
            color: #666665;
          }
      
          .markdown hr {
            display: block;
            width: 14%;
            margin: 40px auto 34px;
            border: 0 none;
            border-top: 3px solid #dededc;
          }
      
          .markdown blockquote {
            margin: 0 0 1.64em 0;
            border-left: 3px solid #dadada;
            padding-left: 12px;
            color: #666664;
          }
      
          .markdown blockquote a {
            color: #666664;
          }
      
          .markdown ul,
          .markdown ol {
            margin: 0 0 24px 6px;
            padding-left: 16px;
          }
      
          .markdown ul {
            list-style-type: square;
          }
      
          .markdown ol {
            list-style-type: decimal;
          }
      
          .markdown li {
            line-height: 1.6em;
            margin-bottom: 0.2em;
          }
      
          .markdown li ul,
          .markdown li ol {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 14px;
          }
      
          .markdown li ul {
            list-style-type: disc;
          }
      
          .markdown li ul ul {
            list-style-type: circle;
          }
      
          .markdown li p {
            margin: 0.4em 0 0.6em;
          }
      
          .markdown .unstyled {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
      
          .markdown code,
          .markdown tt {
            color: #808080;
            background-color: #f9f9f7;
            padding: 1px 2px;
            border: 1px solid #dadada;
            border-radius: 3px;
            font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
            word-wrap: break-word;
          }
      
          .markdown pre {
            margin: 1.64em 0;
            border: none;
            border-left: 3px solid #dadada;
            padding: 7px 7px 7px 10px;
            overflow: auto;
            line-height: 1.5;
            font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
            color: #4c4c4c;
            background-color: #f9f9f7;
          }
      
          .markdown pre code,
          .markdown pre tt {
            color: #4c4c4c;
            border: none;
            background: none;
            padding: 0;
          }
      
          .markdown table {
            width: 100%;
            max-width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 1.5em;
            font-size: 0.96em;
            box-sizing: border-box;
          }
      
          .markdown table th {
            font-size: 1.1em;
            font-weight: bold;
          }
      
          .markdown th,
          .markdown td {
            text-align: left;
            padding: 4px 8px 4px 10px;
            border: 1px solid #dadada;
          }
      
          .markdown td {
            vertical-align: top;
          }
      
          .markdown tr:nth-child(even) {
            background-color: #efefee;
          }
      
          .markdown iframe {
            display: block;
            max-width: 100%;
            margin-bottom: 30px;
          }
      
          .markdown figure iframe {
            margin: auto;
          }
      
          .markdown table pre {
            margin: 0;
            padding: 0;
            border: none;
            background: none;
          }
      
          @media (min-width: 1100px) {
            .markdown blockquote {
              margin-left: -24px;
              padding-left: 20px;
              border-width: 4px;
            }
      
            .markdown blockquote blockquote {
              margin-left: 0;
            }
          }
      
          .markdown h2 {
            text-align: center;
          }
      
          .markdown-text a {
            color: #778087
          }
      
          .markdown-text ul {
            list-style-type: disc;
            margin-bottom: 5px;
            margin-left: 15px
          }
      
          .markdown-text ul ul {
            list-style-type: circle
          }
      
          @media (min-width: 768px) {
      
            .markdown {
              width: 90%;
              margin: 0 auto;
            }
      
            .markdown img.full-image,
            .markdown img {
              width: auto;
              max-width: 400px;
              margin: 0 auto;
            }
          }
          code.sourceCode span.kw {
            color: #007020;
            font-weight: bold;
          }
          code.sourceCode span.dt {
            color: #902000;
          }
          code.sourceCode span.dv {
            color: #40a070;
          }
          code.sourceCode span.bn {
            color: #40a070;
          }
          code.sourceCode span.fl {
            color: #40a070;
          }
          code.sourceCode span.ch {
            color: #4070a0;
          }
          code.sourceCode span.st {
            color: #4070a0;
          }
          code.sourceCode span.co {
            color: #60a0b0;
            font-style: italic;
          }
          code.sourceCode span.ot {
            color: #007020;
          }
          code.sourceCode span.al {
            color: red;
            font-weight: bold;
          }
          code.sourceCode span.fu {
            color: #06287e;
          }
          code.sourceCode span.re {
          }
          code.sourceCode span.er {
            color: red;
            font-weight: bold;
          }
          .hljs{display:block;overflow-x:auto;padding:0.5em;background:#F0F0F0}.hljs,.hljs-subst{color:#444}.hljs-comment{color:#888888}.hljs-keyword,.hljs-attribute,.hljs-selector-tag,.hljs-meta-keyword,.hljs-doctag,.hljs-name{font-weight:bold}.hljs-type,.hljs-string,.hljs-number,.hljs-selector-id,.hljs-selector-class,.hljs-quote,.hljs-template-tag,.hljs-deletion{color:#880000}.hljs-title,.hljs-section{color:#880000;font-weight:bold}.hljs-regexp,.hljs-symbol,.hljs-variable,.hljs-template-variable,.hljs-link,.hljs-selector-attr,.hljs-selector-pseudo{color:#BC6060}.hljs-literal{color:#78A960}.hljs-built_in,.hljs-bullet,.hljs-code,.hljs-addition{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}
        </style>
      </head>
      <body>
        <div class="markdown">
          ${html.replace(/\n/g, '<br>')}
        </div>
      </body>
      </html>`);
    }
    return '';
  }
}
export default HtmlHelper;
