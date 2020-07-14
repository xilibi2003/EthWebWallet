# 以太坊网页钱包代码


## 安装
### 方法１

如果是clone 的代码直接使用：
```
> npm install
```

安装依赖．

###　方法２：

如果是自己从头开始建立工程，可以使用以下方法：

```
npm init
npm install lite-server
```

安装openzeppelin-solidity:

```
> npm install openzeppelin-solidity
```

## 部署

我这边是使用Geth作为节点, 大家也可以使用Ganache, 大家要注意网络配置和账号再部署和页面中保持一致.

部署的时候进行解锁
personal.unlockAccount(eth.accounts[0],"");

```
> truffle migrate
```

## 启动Web服务

因为provider 是使用的本地的geth节点，因此需要先启动geth：

```
geth --datadir testNet --dev --rpc --rpccorsdomain "http://localhost:3000" console
```

当然provider 也可以在app.js 中按自己的要求修改，参考文档 https://docs.ethers.io/ethers.js/html/api-providers.html

启动web程序：

```
> npm run dev
```

