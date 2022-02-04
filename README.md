<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>

<img src="https://www-cdn.bigcommerce.com/assets/bc-photo-branding-bigcommerce-primary-gray-background.png?mtime=20211210160101" height="80px"/>
</div>

## Vue Storefront 2 integration with BigCommerce

This project is a BigCommerce integration for Vue Storefront 2.

## How to start if you want to try out the integration

```
yarn global add @vue-storefront/cli
```
```
vsf init bigcommerce && cd bigcommerce && yarn && yarn dev
```

## How to start if you want to contribute?

Want to contribute? Ping us on `bigcommerce` channel on [our Discord](http://discord.vuestorefront.io)!

### Requirements:
- NodeJS v14.18 or later
- Yarn
- BigCommerce instance

### Steps

(<b>Note: Currently only yarn is supported because of workspaces resolving. Do not use npm to install or build the project.</b>)

1. [Fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

2. Clone your fork of the repo
    ```bash
    git clone https://github.com/vuestorefront/bigcommerce.git && cd bigcommerce
    ```

3. Checkout `develop` branch
    ```bash
    git checkout develop
    ```

4. Run `yarn` to install dependencies
    ```bash
    yarn install
    ```
5. Follow the [configuration guide](https://docs.europe-west1.gcp.storefrontcloud.io/bigcommerce/guide/configuration.html) to prepare BigCommerce instance and VueStorefront app

6. Build dependencies `yarn build`
    ```bash
    yarn build
    ```

7. Run `yarn dev` to run project. You can find other commands in `package.json`
    ```bash
    yarn dev
    ```

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [BigCommerce integration Documentation](https://docs.europe-west1.gcp.storefrontcloud.io/bigcommerce/guide/configuration.html#set-up-vuestorefront) (Work In Progress)
- [Community Chat](http://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on  `bigcommerce` channel on [our Discord](http://discord.vuestorefront.io).

## Contributors

### Honorable Mentions
- [scernisevs](https://github.com/scernisevs)
- [dhargitai](https://github.com/dhargitai)
- [zoltantakacs-born](https://github.com/zoltantakacs-born) 
- [darocha](https://github.com/darocha)

Thanks go to these wonderful people 🙌
