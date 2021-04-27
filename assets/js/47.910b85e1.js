(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{457:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"位带操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位带操作"}},[s._v("#")]),s._v(" 位带操作")]),s._v(" "),a("h2",{attrs:{id:"什么是位带操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是位带操作"}},[s._v("#")]),s._v(" 什么是位带操作")]),s._v(" "),a("p",[s._v("关于什么是位带操作，其实包括野火或者正点原子的书上写的很清楚，就是为了实现对某个精确的比特的读写讲位带区的一个比特扩大为别名区的四个字节（32 bit）")]),s._v(" "),a("p",[s._v("不清楚的话可以参考：")]),s._v(" "),a("ul",[a("li",[s._v("《野火®零死角玩转STM32（库函数版）》14章")]),s._v(" "),a("li",[s._v("《正点原子：STM32F4标准库》5.2.1 节")])]),s._v(" "),a("p",[s._v("在 SRAM 和 外设取均设有位带区。")]),s._v(" "),a("p",[s._v("关于换算公式可以了解一下，其实理解原理之后就能很好的理解到底是怎样从位带区的一个比特映射到别名区的。对了，一定不要忘了地址空间上寄存器的分布规律(就是四个字节分为一组，一组为一个寄存器，就在前面的文章)")]),s._v(" "),a("h2",{attrs:{id:"gpio-位带操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio-位带操作"}},[s._v("#")]),s._v(" GPIO 位带操作")]),s._v(" "),a("p",[s._v("对 GPIO 进行位带操作可以方便的使用位操作控制 GPIO 的输入与输出")]),s._v(" "),a("h3",{attrs:{id:"gpio-寄存器映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio-寄存器映射"}},[s._v("#")]),s._v(" GPIO 寄存器映射")]),s._v(" "),a("p",[s._v("要控制 GPIO 的输入与输出，需要控制 ODR 与 IDR 寄存器，所以首先对这些寄存器进行宏定义：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// GPIO ODR 和 IDR 寄存器地址映射")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOA_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOA_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x4001080C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOB_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOB_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40010C0C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOC_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOC_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x4001100C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOD_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOD_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x4001140C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOE_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOE_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x4001180C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOF_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOF_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011A0C")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOG_ODR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOG_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011E0C")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOA_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOA_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40010808")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOB_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOB_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40010C08")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOC_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOC_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011008")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOD_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOD_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011408")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOE_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOE_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011808")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOF_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOF_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011A08")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("GPIOG_IDR_Addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOG_BASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0x40011E08")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("下一步我们希望通过一个带参数的宏来方便的控制究竟是哪一个引脚在输入或输出")]),s._v(" "),a("h3",{attrs:{id:"gpio-位操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio-位操作"}},[s._v("#")]),s._v(" GPIO 位操作")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 计算公式 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把“位带地址+位序号”转换成别名地址的宏")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("BITBAND")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bitnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xF0000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x02000000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x00FFFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bitnum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把一个地址转换成一个指针")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("MEM_ADDR")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把位带别名区地址转换成指针")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bitnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MEM_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BITBAND")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bitnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单独操作 GPIO 的某一个IO 口，n(0,1,2...16),n 表示具体是哪一个IO 口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PAout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOA_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PAin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOA_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PBout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOB_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PBin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOB_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PCout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOC_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PCin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOC_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PDout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOD_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PDin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOD_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PEout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOE_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PEin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOE_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PFout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOF_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PFin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOF_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PGout")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOG_ODR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("PGin")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BIT_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIOG_IDR_Addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("这么一来："),a("code",[s._v("PAout(5) = 1")]),s._v(" 就可以表示 "),a("code",[s._v("GPIOA_Pin5")]),s._v(" 输出高电平")]),s._v(" "),a("p",[s._v("判断"),a("code",[s._v("GPIOA_Pin5")]),s._v(" 是否正在输出高电平可以使用 "),a("code",[s._v("if (PAin(5) == 1)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);