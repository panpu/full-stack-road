# MongoDB问题记录
## REST 是Representational State Transfer的缩写，翻译是”表现层状态转化”.

面向资源是REST最明显的特征，对于同一个资源的一组不同的操作。资源是服务器 上一个可命名的抽象概念，资源是以名词为核心来组织的，首先关注的是名词。REST要求，必须通过统一的接口来对资源执行各种操作。对于每个资源只能执行一组有限的操作。
*get 获取  post 创建  put 更新  delete 删除*
```
状态码
200(OK) - 表示已在响应中发出
204(无内容) - 资源有空表示
301(Moved Permanently) - 资源的URI已被更新 303(See Other) - 其他(如，负载均衡)
304(not modified)- 资源未更改(缓存)
400 (bad request)- 指代坏请求(如，参数错误) 404 (not found)- 资源不存在
406 (not acceptable)- 服务端不支持所需表示
500 (internal server error)- 通用错误响应
503 (Service Unavailable)- 服务端当前无法处理请求
```