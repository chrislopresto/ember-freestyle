interface Hljs {
  highlightBlock: (el: HTMLElement) => void;
  initHighlighting: {
    called: boolean;
  };
}
declare const hljs: Hljs;
