import PageObject, {
  visitable,
  value,
  text,
  fillable,
  triggerable,
  clickable,
  hasClass,
  isVisible,
} from 'ember-cli-page-object';

const blockContentInput =
  '.FreestyleDynamic-input:contains(blockContent) textarea';
const tastefulInput = '.FreestyleDynamic-input:contains(isTasteful:) input';
const selectInput = '.FreestyleDynamic-input:contains(size:) select';
const numberInput = '.FreestyleDynamic-input:contains(rank:) input';
const checkboxInput = '.FreestyleDynamic-input:contains(isVisible:) input';

export default PageObject.create({
  visit: visitable('/acceptance?s=Dynamic%20Properties'),

  sourceContainer: text('.FreestyleUsage-sourceContainer'),

  blockContentInputValue: value(blockContentInput),
  blockContentRendered: text('.x-Bar-description'),
  fillInBlockContentInput: fillable(blockContentInput),
  keyUpBlockContentInput: triggerable('keyup', blockContentInput),
  async changeBlockContentInput(newValue) {
    await this.fillInBlockContentInput(newValue),
      await this.keyUpBlockContentInput();
  },
  toggleTastefulInput: clickable(tastefulInput),

  selectInputValue: value(selectInput),
  isSmall: hasClass('x-Bar--small', '.x-Bar'),
  isMedium: hasClass('x-Bar--medium', '.x-Bar'),
  changeSelectInput: fillable(selectInput),

  numberInputValue: value(numberInput),
  numberRendered: text('.x-Bar-rank'),
  changeNumberInput: fillable(numberInput),

  checkboxInputValue: value(checkboxInput),
  isVisible: isVisible('.x-Bar'),
  toggleCheckbox: clickable(checkboxInput),
});
