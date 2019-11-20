#include<iostream>
#include<map>
#include<vector>
using namespace std;
//，用来存放用户数据的结构体
struct cts {
  // 用户id
  int id;
  // 用户会员等级
  int level;
  // 用户总消费
  float cost;
  //，用户购买的东西
  map < int, int >buy;
};
// 对结构体进行排序的函数
bool compare(const cts & x, const cts & y) {
  if (x.cost != y.cost)
    return x.cost < y.cost;
  return x.id < y.id;
}
// 提示用户输入的函数
void prompt_level(int i) {
  cout << "普通用户(0)   银卡用户(1)   金卡用户(2)   VIP用户(3)"
    << endl;
}
// 提示用户输入的函数
void prompt_buy(int i) {
  cout << "万豪顿牌的可可制成的布朗尼5元(0)   ⑨号茶10元(1)   奥利给15元(2)" << endl;
}
// 根据用户会员等级进行打折
cts ret_cts(cts c, float money) {
  switch (c.level) {
  case 0:
    c.cost = money;
    break;
  case 1:
    c.cost = money * .95;
    break;
  case 2:
    c.cost = money * .85;
    break;
  case 3:
    c.cost = money * .8;
    break;
  }
  return c;
}
// 计算购买商品单价
int calculate_money(int n, int item) {
  int sum = 0;
  switch (n) {
  case 0:
    sum += item * 5;
    break;
  case 1:
    sum += item * 10;
    break;
  case 2:
    sum += item * 15;
    break;
  }
  return sum;
}
int main() {
  int customers;
  vector < cts > result;
  cout << "请输入客人总数:";
  cin >> customers;
  // 根据输入客户数据
  for (int i = 1; i <= customers; i++) {
    int item;
    int sum = 0;
    cts c {};
    // 调用提示函数输出提示
    prompt_level(i);
    // 依次输入用户会员等级
    cout << "请输入" << i << "号客人的会员等级:";
    cin >> c.level;
    // 如果用户输入的会员等级不存在，默认无折扣
    if (c.level < 0 || c.level > 3) {
      cout << "会员等级错误！无折扣！" << endl;
      c.level = 0;
    }
    c.id = i;
    // 调用提示函数输出提示
    prompt_buy(i);
    for (int n = 0; n <= 2; n++) {
      // 一共三种商品，循环三次依次输入购买了多少，没购买就是0
      cout << i << "号客人购买" << n << "号商品数量:";
      cin >> item;
      // 如果商品数量出现了负数，默认设置为0
      item = item < 0 ? 0 : item;
      // 存储用户购买商品的信息，key就是商品编号，value是商品数量
      c.buy[n] = item;
      // 调用函数计算用户总消费
      sum += calculate_money(n, item);
    }
    // 添加进结果，方便排序
    result.push_back(ret_cts(c, sum));
    cout << endl;
  }
  // 对用户数据进行排序
  sort(result.begin(), result.end(), compare);
  for (int j = 0; j < result.size(); j++) {
    // 取出用户数据
    cts t = result[j];
    cout << t.id << "号客人消费清单如下" << endl;
    cout << "-------------" << endl;
    // 输出用户买了什么，买了多少个
    for (map < int, int >::iterator it = t.buy.begin(); it != t.buy.end();
         it++) {
      cout << "购买" << it->first << "号商品      " << it->
        second << "件" << endl;
    }
    // 输出用户总消费
    cout << "总消费  " << t.cost << "      元" << endl;
    cout << endl;
  }
  return 0;
}
