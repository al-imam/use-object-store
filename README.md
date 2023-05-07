<h1 align="center">Welcome to use-object-store 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/use-object-store" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/use-object-store.svg">
  </a>
  <a href="https://github.com/al-imam/use-object-store#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> use-object-store help's object state management no more 5-6 useState no more complex action based reducer 😘

## Install

```sh
npm install use-object-store
```

```sh
yarn add use-object-store
```

```sh
pnpm add use-object-store
```

## how to use?

```typescript
import useObjectStore from "use-object-store";

function multipleCounter() {
  /*
    - take object as initial value
    - type will be infer from initial value or add generic
    - return full object and updateStore function
    - updateStore function takes at last one store property and update that
  */
  const [{ one, two }, updateStore] = useObjectStore({ one: 0, two: 0 });

  return (
    <main>
      <button onClick={() => updateStore({ one: one++ })}>{one}</button>
      <button onClick={() => updateStore({ two: two++ })}>{two}</button>
    </main>
  );
}
```

## Author

👤 **al-imam**

- Github: [@al-imam](https://github.com/al-imam)
- LinkedIn: [@alimam](https://linkedin.com/in/alimam)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/al-imam/use-object-store/issues)..

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
