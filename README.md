3 Macam Sorting Berbeda

Sorting 1 :
Saya memggunakan algoritma bubble sort, karena saya masih mengingat algoritma ini. 
Algoritma ini memiliki time complexity O(n^2),karena memiliki nested loop 2 lapis.

Sorting 2 :
Untuk setiap iterasi i, int temp mengambil nilai array ke-i dan membandingkannya dengan nilai indeks array lain pada iterasi j. Apabila nilai lebih kecil, maka nilai temp akan digantikan, sehingga pada akhir iterasi j, temp bernilai nilai terkecil pada iterasi j. Kemudian tukar kedua nilai tersebut dan terus melakukan operasi ini.
Algoritma ini memiliki time complexity O(n^2),karena memiliki nested loop 2 lapis.

Sorting 3 :
Saya menggunakan pengaplikasian rekursif untuk mengimitasi kerja traversal inorder pada binary search tree. Pertama, set nilai mid menjadi nilai array ke-0 dan pisahkan array sisanya menjadi array left dan right. Kemudian memanggil fungsi yang sama kembali dengan melemparkan array left dan right terus secara rekursif sehingga array habis. 
Algoritma ini memiliki time complexity O(n log n),karena time complexity untuk setiap pemanggilan fungsi rekursif akan berkurang menjadi setengah dari yang sebelumnya sehingga sum dari keseluruhan akan menjadi n log n.
