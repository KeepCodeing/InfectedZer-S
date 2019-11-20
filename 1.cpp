#include<vector>
#include<algorithm>
#include<iostream>
using namespace std;
// 用来存放选手信息的结构体，c艹的结构体可以不用typedef
struct sc {
  int id;
  float avg;
};
sc aver(vector < float >s, int id) {
  /* if (s.size() == 1) return sc {id, s[0]}; if (s.size() == 2) return sc
     {id, (s[0]+s[1])/2}; for (int i = 1; i <= s.size() - 1; i++) { } */
  if (s.size() >= 5) {
    // 当评委人数大于等于5，去除数组的第一个和最后一个元素(最低和最高分)
    s[0] = s[s.size() - 1] = 0;
  }
  float sum = .0;
  for (int i = 0; i < s.size(); i++) { 
    sum += s[i];
  }
  // 对成绩求均值，并返回结构体
  return sc {id, sum/s.size()};
}

bool compare(const sc &x, const sc &y) {
    // 对结构体进行排序的函数，如果选手成绩不相等按照成绩从小到大排序
    if (x.avg != y.avg)  return x.avg < y.avg;
    // 如果选手成绩相等则按照id从小到大排序，保证输出顺序正确
    return x.id < y.id;
}

int main() {
  int pw = 2;
  int xs = 0;
  int i, j;
  float temp;
  vector<sc> result;
  sc s {};
  // 保证用户输入的评委个数是奇数
  while (!(pw % 2) && pw > 0) {
    cout << "请输入评委个数(奇数):";
    cin >> pw;
  }
  // 用户必须输入选手成绩
  while (xs <= 0) {
    cout << "请输入选手个数(至少一人):";
    cin >> xs;
  }
  // 对每个选手依次打分
  for (int i = 1; i <= xs; i++) {
    // 用来暂存评委评分
    vector < float >scores_arr;
    for (int j = 1; j <= pw; j++) {
      // 输入评委评分
      cout << "输入" << j << "号评委对" << i << "号选手的打分:";
      cin >> temp;
      scores_arr.push_back(temp);
    }
    cout << endl;
    // 对评分先排序，方便去除最高最低成绩，当评委人数大于等于5人时去掉最高分和最低分
    sort(scores_arr.begin(), scores_arr.end());
    // 存放选手id和平均成绩
    result.push_back(aver(scores_arr, i));
  }
  // 按照成绩进行排序
  sort(result.begin(), result.end(), compare);
  cout << "_______排名(从低到高)_______" <<endl;
  // 输出排名
  for (int i = 0; i < result.size(); i++) { 
      sc t  = result[i];
      cout << "     " << t.id << "号选手平均  " << t.avg << "分" << endl;
  }
}
