class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
      unordered_map<string, vector<string>> hash;

      for (string& s: strs) {
        string key = s;                 
        sort(key.begin(), key.end());
        hash[key].push_back(s);
      }
              
      vector<vector<string>> r;
      for (auto& pair: hash) r.push_back(pair.second);

      return r;
    }
};

