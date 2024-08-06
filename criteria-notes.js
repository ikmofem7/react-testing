[{"content":"const DataForm = () => {\n  return (\n    <div>\n      <button>Go back</button>\n      <form aria-label=\"form\">\n        <button>Save</button>\n        <button>Cancel</button>\n      </form>\n    </div>\n  );\n};\n\nrender(<DataForm />);","type":"code","id":"a4daq"},{"content":"const toContainRole = (container, role, quantity = 1) => {\n  console.log({ container });\n  const element = within(container).getAllByRole(role);\n  if (element.length === quantity) {\n    return {\n      pass: true,\n    };\n  }\n  return {\n    pass: false,\n    message: () => `the container doesnt have ${quantity} ${role}`,\n  };\n};\n\nexpect.extend({ toContainRole });","type":"code","id":"sx9fl"},{"content":"test('the form display 2 buttons', () => {\n  render(<DataForm />);\n  const form = screen.getByRole('form');\n  expect(form).toContainRole('button', 1);\n});","type":"code","id":"ps666"}]