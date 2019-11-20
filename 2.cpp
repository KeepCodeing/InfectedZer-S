#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;
// 存放选手信息的结构体
struct sc {
  int id;
  int s;
};
bool compare(const sc & x, const sc & y) {
  // 对结构体进行排序的函数，如果选手成绩不相等按照成绩从小到大排序
  if (x.s != y.s)
    return x.s < y.s;
  // 如果选手成绩相等则按照id从小到大排序，保证输出顺序正确
  return x.id < y.id;
}
int main() {
  int pw = 0, xs = 0;
  int s;
  vector < sc > result;
  while (pw <= 0) {
    cout << "请输入评委个数:";
    cin >> pw;
  }
  while (xs <= 0) {
    cout << "请输入选手个数:";
    cin >> xs;
  }
  // 将所有选手的初始得分都设置为0
  vector < int >scores(xs, 0);
  for (int i = 0; i < pw; i++) {
    cout << i + 1 << "号评委投票给:";
    cin >> s;
    // 可能会出现不存在的选手
    if (s > xs || s <= 0) {
      cout << "选手不存在，默认弃权" << endl;
      continue;
    }
    // 将vector的下标作为选手号，值作为选手的得分
    scores[s - 1]++;
  }
  for (int j = 0; j < scores.size(); j++) {
    // 将选手成绩放入结构体方便排序
    result.push_back(sc {j + 1, scores[j]});
  }
  // 对结果进行排序
  sort(result.begin(), result.end(), compare);
  cout << endl;
  cout << "----------投票结果----------" << endl;
  for (int n = 0; n < result.size(); n++) {
    sc t = result[n];
    cout << "     " << t.id << "号选手得了  " << t.s << "分" << endl;
  }
  return 0;
}