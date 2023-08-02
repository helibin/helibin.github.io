<!--
 * @Author: Lybeen
 * @Email: helibin@139.com
 * @Date: 2022-10-23 12:04:31
 * @LastEditTime: 2023-07-31 18:15:15
 * @LastEditors: Lybeen
 * @FilePath: /mine/helibin.github.io/docs/note/cpu.md
-->

cpu

<script setup>
  console.log(122434)
  const compute = (n) => {
    const eleList = document.querySelectorAll('.cpuCompute');
    let i = 1;
    const now = Date.now();
    document.querySelector('#timeSpent').innerHTML = '计算中...';
    document.querySelector('#timeSpent').style = 'display: block';
    eleList.forEach(d => d.setAttribute('disabled', true));
    setTimeout(() => {
      for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
          console.log(i, j);
        }
      }
      const spent = ((Date.now() - now) / 1000).toFixed(2);
      console.log(spent, 'spent,,,');
      document.querySelector('#timeSpent').innerHTML = '耗时: ' + spent + '秒';
      eleList.forEach(d => d.removeAttribute('disabled'));
    }, 10);
  }


</script>
