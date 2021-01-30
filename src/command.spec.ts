import { boldCommand, customToolbar, italicCommand, setColorCommand, textEditor, underlineCommand } from './command';

describe(`command`, () => {
  const toolbar = customToolbar();
  const text = textEditor(`Design Patterns`);

  it(`given empty toolbar > when push all buttons > should have no effect`, () => {
    toolbar.pushButton(0);
    toolbar.pushButton(1);
    toolbar.pushButton(2);
    toolbar.pushButton(3);
    toolbar.pushButton(4);
    toolbar.pushButton(5);
    expect(text.print()).toEqual(`Design Patterns`);
  });

  it(`given custom toolbar > when push button 0 > should make text editor bold`, () => {
    toolbar.setCommand(0, boldCommand(text));
    toolbar.setCommand(1, italicCommand(text));
    toolbar.setCommand(2, underlineCommand(text));
    toolbar.setCommand(3, setColorCommand(text, `red`));
    toolbar.setCommand(4, setColorCommand(text, `blue`));
    toolbar.setCommand(5, setColorCommand(text, `green`));
    toolbar.pushButton(0);
    expect(text.print()).toEqual(`<b>Design Patterns</b>`);
  });

  it(`given custom toolbar > when undo > should undo changes`, () => {
    toolbar.undo();
    expect(text.print()).toEqual(`Design Patterns`);
  });

  it(`given custom toolbar > when undo twice > should have no effect`, () => {
    toolbar.undo();
    expect(text.print()).toEqual(`Design Patterns`);
  });

  it(`given custom toolbar > when push all the buttons > should have expected result`, () => {
    toolbar.pushButton(0);
    toolbar.pushButton(1);
    toolbar.pushButton(2);
    toolbar.pushButton(3);
    toolbar.pushButton(4);
    toolbar.pushButton(5);
    expect(text.print()).toEqual(`<span style="color: green"><u><i><b>Design Patterns</b></i></u></span>`);
  });

  it(`given custom toolbar > when undo 6 times > should undo changes`, () => {
    toolbar.undo();
    toolbar.undo();
    toolbar.undo();
    toolbar.undo();
    toolbar.undo();
    toolbar.undo();
    toolbar.undo();
    expect(text.print()).toEqual(`Design Patterns`);
  });
});
