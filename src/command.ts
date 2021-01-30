interface TextEditor {
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  getColor: () => string | undefined;
  setColor: (color?: string) => void;
  print: () => string;
}

export const textEditor = (raw: string): TextEditor => {
  let bold = false;
  let italic = false;
  let underline = false;
  let color: string | undefined;
  return {
    toggleBold: () => {
      bold = !bold;
    },
    toggleItalic: () => {
      italic = !italic;
    },
    toggleUnderline: () => {
      underline = !underline;
    },
    getColor: () => color,
    setColor: (newColor?: string) => {
      color = newColor;
    },
    print: () => {
      let output = raw;
      if (bold) output = `<b>${output}</b>`;
      if (italic) output = `<i>${output}</i>`;
      if (underline) output = `<u>${output}</u>`;
      if (color) output = `<span style="color: ${color}">${output}</span>`;
      return output;
    },
  };
};

export interface Command {
  execute: () => void;
  undo: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noCommand: Command = { execute: () => {}, undo: () => {} };

export const boldCommand = ({ toggleBold }: TextEditor): Command => ({
  execute: () => toggleBold(),
  undo: () => toggleBold(),
});

export const italicCommand = ({ toggleItalic }: TextEditor): Command => ({
  execute: () => toggleItalic(),
  undo: () => toggleItalic(),
});

export const underlineCommand = ({ toggleUnderline }: TextEditor): Command => ({
  execute: () => toggleUnderline(),
  undo: () => toggleUnderline(),
});

export const setColorCommand = ({ getColor, setColor }: TextEditor, color: string): Command => {
  let previous: string | undefined;
  return {
    execute: () => {
      previous = getColor();
      setColor(color);
    },
    undo: () => setColor(previous),
  };
};

export interface Toolbar {
  setCommand: (index: 0 | 1 | 2 | 3 | 4 | 5, command: Command) => void;
  pushButton: (index: 0 | 1 | 2 | 3 | 4 | 5) => void;
  undo: () => void;
}

export const customToolbar = (): Toolbar => {
  const commands: Command[] = [noCommand, noCommand, noCommand, noCommand, noCommand, noCommand];
  const history: Command[] = [];
  return {
    setCommand: (index: 0 | 1 | 2 | 3 | 4 | 5, command: Command) => (commands[index] = command),
    pushButton: (index: 0 | 1 | 2 | 3 | 4 | 5) => {
      history.push(commands[index]);
      commands[index].execute();
    },
    undo: () => (history.pop() || noCommand).undo(),
  };
};
