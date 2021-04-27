(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{450:function(t,v,_){"use strict";_.r(v);var a=_(20),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"cpu-基本结构与运行机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-基本结构与运行机制"}},[t._v("#")]),t._v(" CPU 基本结构与运行机制")]),t._v(" "),_("h3",{attrs:{id:"mcu-structure"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mcu-structure"}},[t._v("#")]),t._v(" MCU Structure")]),t._v(" "),_("ul",[_("li",[t._v("The CPU\n"),_("ul",[_("li",[t._v("Register file (寄存器组)")]),t._v(" "),_("li",[t._v("Instruction latch/decode/branch (指令)")]),t._v(" "),_("li",[t._v("Stack (栈)")]),t._v(" "),_("li",[t._v("Interrupt (中断)")]),t._v(" "),_("li",[t._v("Clock/Reset (时钟/复位)")])])]),t._v(" "),_("li",[t._v("Memory")]),t._v(" "),_("li",[t._v("Peripheral")])]),t._v(" "),_("h2",{attrs:{id:"cpu-基本架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-基本架构"}},[t._v("#")]),t._v(" CPU 基本架构")]),t._v(" "),_("h3",{attrs:{id:"cpu-contains"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-contains"}},[t._v("#")]),t._v(" CPU contains")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Arithmetic Logic Unit (ALU, 逻辑运算单元)")])]),t._v(" "),_("li",[_("strong",[t._v("Register file (寄存器组)")])]),t._v(" "),_("li",[_("strong",[t._v("Control Unit (控制单元)")])]),t._v(" "),_("li",[t._v("Float point process Unit")]),t._v(" "),_("li",[t._v("Cache management")]),t._v(" "),_("li",[t._v("Memory Management Unit")])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("粗体")]),t._v("为必要部分，其他为非必要部分")])]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200817110448.png",alt:"CPU"}})]),t._v(" "),_("h3",{attrs:{id:"逻辑运算单元-alu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算单元-alu"}},[t._v("#")]),t._v(" 逻辑运算单元 ALU")]),t._v(" "),_("p",[t._v("ALU 就是将输入的数据经过运算输出结果。它的运行有四个要素：")]),t._v(" "),_("ul",[_("li",[t._v("Two input data    --\x3e   operands (操作数)")]),t._v(" "),_("li",[t._v("Instruction           --\x3e  operation (运算)")]),t._v(" "),_("li",[t._v("One ouput           --\x3e  result")]),t._v(" "),_("li",[t._v("Status                  --\x3e  flag (标志位)")])]),t._v(" "),_("p",[t._v("前三个都还好理解，但是第四个要素"),_("strong",[t._v("标志位")]),t._v("在人脑的运算逻辑下不具备：它实际上是记载运算结果的状态的一个要素，例如：结果溢出、比较大小的时候做差二进制补码的第一位是几等等")]),t._v(" "),_("h3",{attrs:{id:"程序状态寄存器-psr"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序状态寄存器-psr"}},[t._v("#")]),t._v(" 程序状态寄存器 PSR")]),t._v(" "),_("p",[t._v("PSR (Program Status Register)，也就是储存 ALU 计算的标志位的位置，图上的四个字母"),_("code",[t._v("Z, N, O, C")]),t._v("所代表的就是："),_("code",[t._v("Zero")]),t._v(", "),_("code",[t._v("Negative")]),t._v(", "),_("code",[t._v("Overflow")]),t._v(", "),_("code",[t._v("Carry")])]),t._v(" "),_("p",[t._v("但是指令不同，使用到的状态位也不同，根据芯片的芯片手册查看具体信息")]),t._v(" "),_("h3",{attrs:{id:"寄存器-register"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#寄存器-register"}},[t._v("#")]),t._v(" 寄存器 Register")]),t._v(" "),_("p",[t._v("ALU 的指令从何而来？快速的方式是寄存器：寄存器用于"),_("strong",[t._v("临时")]),t._v("保存/获取操作数，任何CPU都包含若干通用/专用寄存器（所以此处指的是 "),_("strong",[t._v("CPU 片内的寄存器")]),t._v("）")]),t._v(" "),_("p",[t._v("相反的，运算的一些结果也可以先储存在寄存器中方便 CPU 进行调用")]),t._v(" "),_("h3",{attrs:{id:"外部内存-memory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外部内存-memory"}},[t._v("#")]),t._v(" 外部内存 Memory")]),t._v(" "),_("p",[t._v("从寄存器中获取的指令终究还是要从一个稳定的内从中取出：他就是内存，一般处在 ARM 内核的外部，所以对其访问要比对寄存器慢很多")]),t._v(" "),_("p",[t._v("而在上面提到的运算结果数据有需要的话则最终会放进更加稳定的外部储存空间")]),t._v(" "),_("p",[t._v("访问外部的储存空间是通过地址的形式进行的（参考 C 语言的指针概念），重要的数据、指令都会储存在这里")]),t._v(" "),_("h3",{attrs:{id:"控制单元-control-unit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#控制单元-control-unit"}},[t._v("#")]),t._v(" 控制单元 Control Unit")]),t._v(" "),_("p",[t._v("控制单元控制着整个 CPU 工作的流程，它的工作主要是两个内容，"),_("strong",[t._v("指令解析")]),t._v("与"),_("strong",[t._v("数据流向")]),t._v("：")]),t._v(" "),_("p",[t._v("控制单元将一条确定的指令解析为对存储器、寄存器、ALU的控制来明确要做的运算以及数据的流向。程序由指令序列构成，保存在程序存储器中，这些指令依次进入CPU进行执行，完成一条指令再取一条")]),t._v(" "),_("h3",{attrs:{id:"程序计数器-pc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器-pc"}},[t._v("#")]),t._v(" 程序计数器 PC")]),t._v(" "),_("p",[t._v("PC (Program Counter)，也叫 PC 指针寄存器，它始终指向下一条需要执行的程序的地址。控制单元就是通过它指导程序的流程的")]),t._v(" "),_("p",[t._v("一般情况下程序都会一条一条的顺序运行，但是遇到选择结构（"),_("code",[t._v("if-else")]),t._v("），函数，中断的时候将会在指导下跳跃运行")]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"栈-stack"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[t._v("#")]),t._v(" 栈 Stack")]),t._v(" "),_("blockquote",[_("p",[t._v("在上面我们提到了程序不按顺序进行的情况，有很大一部分执行完跳跃到别处的程序之后还是要回到原来的位置，如何记住跳跃之前的位置呢？")]),t._v(" "),_("p",[t._v("在栈出现之前一直采用的是使用寄存器来暂时储存，但是应对嵌套跳跃一两个寄存器难免捉襟见肘，寄存器数量也不能迁就嵌套一直增加下去，于是出现了"),_("strong",[t._v("栈")]),t._v("的概念")])]),t._v(" "),_("div",{staticClass:"custom-block theorem"},[_("p",{staticClass:"title"},[t._v("栈")]),_("p",[t._v("栈是一段连续的存储空间，它按照后入先出的方式工作（Last In First Out），只能向/从栈的顶部加入或取出数据所以栈能够保持数据的顺序")])]),_("p",[t._v("栈的工作方式可以保证在发生嵌套调用的时候每个出发的地址都能有序的保存在栈中。除此之外，当告诉你局部变函数的参数传递与返回值也是通过栈完成的时候，你可能就会明白 C 语言的一些运行道理")]),t._v(" "),_("p",[t._v("但是栈在存储器中的位置怎么确定呢？答案是由 SP (Stack Pointer) 栈指针寄存器确定的。它的初始位置由程序代码来确定，指向预定的栈空间的底部等待数据压入")]),t._v(" "),_("h3",{attrs:{id:"堆-heap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[t._v("#")]),t._v(" 堆 Heap")]),t._v(" "),_("p",[t._v("与栈相反，"),_("strong",[t._v("堆")]),t._v("则是从内存的上部到下储存内容的一种形式，全局变量与我们在 C 语言中分配的内存 ("),_("code",[t._v("malloc")]),t._v("等) 都是来自这里，它的空间是非连续的")]),t._v(" "),_("p",[t._v("但是由于储存空间终究是有限的，当堆与栈相遇的时候，也就是堆栈溢出将会发生不可控的后果。所以，在微控制器中不要轻易地分配很大的内存空间给一个数组或者其他内容")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200817220117.png"}})]),t._v(" "),_("h2",{attrs:{id:"cpu-的运行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-的运行"}},[t._v("#")]),t._v(" CPU 的运行")]),t._v(" "),_("p",[t._v("知道了上面的知识，大概就可以知晓了 CPU 大概的运行体系，如果忘记了可以跟着下面两个视频串一遍：")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://www.bilibili.com/video/BV1Y7411j7Qt?p=11",target:"_blank",rel:"noopener noreferrer"}},[t._v("S12 CPU (32 bit)"),_("OutboundLink")],1)])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://www.bilibili.com/video/BV1Y7411j7Qt?p=13",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARM Cortex M0+ (32 bit)"),_("OutboundLink")],1)])])]),t._v(" "),_("h2",{attrs:{id:"cpu-内的寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-内的寄存器"}},[t._v("#")]),t._v(" CPU 内的寄存器")]),t._v(" "),_("p",[t._v("对于ARM Cortex-M系列而言，寄存器组均为32位，且相对而言是比较简单的，下面简要介绍一下：")]),t._v(" "),_("h3",{attrs:{id:"r0-r15"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#r0-r15"}},[t._v("#")]),t._v(" R0~R15")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200818230626.png",alt:"REG1"}})]),t._v(" "),_("p",[t._v("如图所示：前13个寄存器都是通用的寄存器；而 "),_("code",[t._v("R13")]),t._v("~"),_("code",[t._v("R15")]),t._v("则是"),_("strong",[t._v("特定用途")]),t._v("的寄存器")]),t._v(" "),_("p",[_("code",[t._v("R13")]),t._v("就是前面提到的堆栈指针寄存器，为什么会有两个是因为在较高性能的"),_("code",[t._v("Cortex-M3, M4")]),t._v("中使用实时操作系统的时候会有系统的主进程与任务进程，为了减少错误，两个 SP 可以将这两个进程用到的堆栈指针分开")]),t._v(" "),_("p",[_("code",[t._v("R14")]),t._v("是前面提到的在使用堆栈之前，在 PC 指针跳跃的时候保存原指令地址的寄存器，在发生很少层级的跳跃的时候，用它会比较快")]),t._v(" "),_("p",[_("code",[t._v("R15")]),t._v("则是一直提到的 PC 指针，不必多讲")]),t._v(" "),_("h3",{attrs:{id:"其他寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他寄存器"}},[t._v("#")]),t._v(" 其他寄存器")]),t._v(" "),_("p",[t._v("为了使单片机正常的运行，ARM 内核中还有一些寄存器起特定的作用：例如"),_("code",[t._v("xPSR")]),t._v(", "),_("code",[t._v("PRIMASK")]),t._v(", "),_("code",[t._v("CONTROL")]),t._v(", "),_("code",[t._v("FAULTMASK")]),t._v(", "),_("code",[t._v("BASEPRI")]),t._v("：")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200818233208.png",alt:"REG2"}})]),t._v(" "),_("h4",{attrs:{id:"xpsr"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xpsr"}},[t._v("#")]),t._v(" xPSR")]),t._v(" "),_("p",[t._v("很有趣的寄存器，其实是三个不同名字的寄存器：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("APSR: Application Program Status Register")]),t._v(" "),_("p",[t._v("就是最开始讲到 ALU 的时候说到的储存 flag 标志位的寄存器，所以只有最高的4个 bit 有用")])]),t._v(" "),_("li",[_("p",[t._v("IPSR: Interrupt Program Status Register")]),t._v(" "),_("p",[t._v("后面的几个 bit 记录中断发生时的中断号")])]),t._v(" "),_("li",[_("p",[t._v("EPSR: Execution Program Register")]),t._v(" "),_("p",[t._v("中间的一个 bit 记录着是否正在发生异常或中断")])])]),t._v(" "),_("h4",{attrs:{id:"primask"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#primask"}},[t._v("#")]),t._v(" PRIMASK")]),t._v(" "),_("p",[t._v("全称是 Priority Mask Register，它的最低一个 bit 是是否允许发生中断的总开关。但是 复位与 NMI (严重错误) 不受其影响")]),t._v(" "),_("h4",{attrs:{id:"control"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" CONTROL")]),t._v(" "),_("ul",[_("li",[t._v("对于"),_("code",[t._v("M0")]),t._v("与"),_("code",[t._v("M0+")]),t._v("这样的低端内核，就只有倒数第二个 bit 在区分在使用哪一个"),_("code",[t._v("R13")]),t._v("（因为这种内核就只有正常运行与执行中断两种状态）")]),t._v(" "),_("li",[t._v("而对于高端的就可以区分用户态与特权态的内核，最后一个 bit 用来记录处于何种状态")])]),t._v(" "),_("p",[t._v("而剩下的两个灰色就是在高端的内核中才出现的寄存器。所以由寄存器而来的，ARM的指令集是向下兼容的。")]),t._v(" "),_("h2",{attrs:{id:"中断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断"}},[t._v("#")]),t._v(" 中断")]),t._v(" "),_("p",[t._v("中断与轮询是两个对立的概念。轮询对于编程是友好的，但是将会浪费很大一部分资源在不间断的监控；而中断则是在"),_("strong",[t._v("硬件层面")]),t._v("的打断，CPU 将会用专门的中断程序来处理事件")]),t._v(" "),_("h3",{attrs:{id:"中断怎么产生"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断怎么产生"}},[t._v("#")]),t._v(" 中断怎么产生")]),t._v(" "),_("p",[_("strong",[t._v("内部事件")]),t._v(" (定时器定时时间到、AD变换结束) 与"),_("strong",[t._v("外部事件")]),t._v(" (按键动作、发生外部通信) 都可以触发中断")]),t._v(" "),_("p",[t._v("我们讲，中断的触发是三个条件的与门，只有同时满足才可以触发，事件只是其中之一：")]),t._v(" "),_("ul",[_("li",[t._v("事件的发生")]),t._v(" "),_("li",[t._v("全局允许中断发生")]),t._v(" "),_("li",[t._v("允许此事件触发中断")])]),t._v(" "),_("p",[t._v("每个中断源都会有相应的中断标志，中断标志位将引发向CPU的中断请求，而这个中断标志位可以通过读写操作清除")]),t._v(" "),_("p",[t._v("触发中断后，CPU 需要立即处理")]),t._v(" "),_("h3",{attrs:{id:"处理中断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#处理中断"}},[t._v("#")]),t._v(" 处理中断")]),t._v(" "),_("p",[t._v("应对不同的中断源，CPU 响应的方式也会不同")]),t._v(" "),_("p",[t._v("但是在中断发生的同时，为了保护正常进程不受影响，数据不会丢失，会对目前的内核状态做一个“快照”：默认的会将一些寄存器的数据压入栈中，对于"),_("code",[t._v("Cortex-M")]),t._v("是这些，但是你当然也可以手动添加其他的，这些都能在数据手册中找到：")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819000937.png",alt:"Interrupt"}})]),t._v(" "),_("h3",{attrs:{id:"中断返回"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断返回"}},[t._v("#")]),t._v(" 中断返回")]),t._v(" "),_("p",[t._v("中断返回与正常的函数返回原位置是不同的，CPU 通过检测 EPSR 的一个 bit 可以区分是什么在返回，如果是中断返回则会将栈内的数据拿出恢复至原状")]),t._v(" "),_("h3",{attrs:{id:"中断与函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断与函数"}},[t._v("#")]),t._v(" 中断与函数")]),t._v(" "),_("p",[t._v("除了在返回时的区别，中断虽然也是一段 "),_("code",[t._v("void")]),t._v(" 类型的函数，但是它的本质与函数还是不太相同：")]),t._v(" "),_("p",[t._v("在编译的时候，函数就已经确定了，它将会在什么时段发生调用等等；而我们的主程序中不可以直接调用中断函数，它什么时候出现也是未知的，所以本质上有些许区别")]),t._v(" "),_("h3",{attrs:{id:"中断向量表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断向量表"}},[t._v("#")]),t._v(" 中断向量表")]),t._v(" "),_("p",[t._v("思考一个问题：在中断发生之后，CPU去哪里找到对应的中断指令？")]),t._v(" "),_("p",[t._v("答案就是"),_("strong",[t._v("中断向量表")]),t._v("：")]),t._v(" "),_("div",{staticClass:"custom-block theorem"},[_("p",{staticClass:"title"},[t._v("中断向量表")]),_("p",[t._v("它是一段连续的储存空间，在复位后有默认的起始位置（ARM中是最前面）。每个中断在向量表中都有相应的表项，该表项的值为该中断对应的服务程序的地址（地址指针，指向的就是中断函数的地址），由程序代码确定中断向量表的每个表项。且中断向量表的位置是可以通过改写中断向量基址寄存器重新定位的")])]),_("p",[t._v("这是"),_("code",[t._v("STM32 F103")]),t._v("中断向量表的一部分：（可在芯片手册中查找）")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819003222.png",alt:"table"}})]),t._v(" "),_("h3",{attrs:{id:"中断的优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断的优先级"}},[t._v("#")]),t._v(" 中断的优先级")]),t._v(" "),_("p",[t._v("多个中断同时出现时，高优先级中断先得到响应。"),_("strong",[t._v("中断优先级")]),t._v("可以是固定的或编程指定的：")]),t._v(" "),_("ul",[_("li",[t._v("固定优先级：根据中断向量表顺序（比如S12的内核）")]),t._v(" "),_("li",[t._v("设定优先级：每个中断都有优先级设置位（比如ARM Cortex M0+支持4个优先级）")])]),t._v(" "),_("p",[t._v("而相同优先级的中断，按先后顺序处理。中断也可以嵌套，中断嵌套指CPU在执行一个中断服务程序的过程中，可以再次响应新的中断请求。在进入中断服务程序时，CPU硬件会将全局中断使能位关闭。为了实现中断嵌套，必须在ISR开始重新允许全局中断（在有多优先级的情况下，选择允许到哪一个级别的中断）但是考虑到中断嵌套对堆栈消耗非常大，所以要尽量调节在可控范围")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819003911.png",alt:"embed"}})]),t._v(" "),_("h2",{attrs:{id:"复位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复位"}},[t._v("#")]),t._v(" 复位")]),t._v(" "),_("p",[t._v("复位也属于一种中断：在开机上电、按下复位按钮、异常强制复位的时候，CPU 将会完成复位的操作：")]),t._v(" "),_("h3",{attrs:{id:"初始化-mcu-内部电路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始化-mcu-内部电路"}},[t._v("#")]),t._v(" 初始化 MCU 内部电路")]),t._v(" "),_("p",[t._v("主要是以下步骤：")]),t._v(" "),_("ul",[_("li",[t._v("初始化微控制器内部电路")]),t._v(" "),_("li",[t._v("将所有寄存器恢复成默认值\n·确认MCU的工作模式")]),t._v(" "),_("li",[t._v("禁止全局中断")]),t._v(" "),_("li",[t._v("关闭外设")]),t._v(" "),_("li",[t._v("将IO置为高阻输入状态")]),t._v(" "),_("li",[t._v("等待时钟振荡趋于稳定")])]),t._v(" "),_("h3",{attrs:{id:"从固定地址取得复位向量并开始执行指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从固定地址取得复位向量并开始执行指令"}},[t._v("#")]),t._v(" 从固定地址取得复位向量并开始执行指令")]),t._v(" "),_("p",[t._v("其实一开始程序并不是直接从"),_("code",[t._v("main")]),t._v("开始执行的，在上面的操作完成后，CPU 将从中断向量表的前几行对应不同种类的复位区找到程序生成的 "),_("code",[t._v("startup code")]),t._v("的地址开始执行，而这段程序最后将跳转至"),_("code",[t._v("main")])]),t._v(" "),_("h2",{attrs:{id:"时钟"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时钟"}},[t._v("#")]),t._v(" 时钟")]),t._v(" "),_("p",[t._v("时钟是指令执行的基本时间间隔，时钟频率高，意味着CPU执行运算的能力强，看门狗/定时器/异步通信等都依赖稳定的时钟。MCU内部是一个统一的"),_("strong",[t._v("时钟树")]),t._v("，外设的时钟是从系统时钟分频得到的。时钟通常由"),_("strong",[t._v("外部晶体")]),t._v("或"),_("strong",[t._v("振荡器")]),t._v("提供，使用外部的配置引脚在复位时选择时钟输入源。")]),t._v(" "),_("p",[t._v("广泛应用锁相环技术，将外部较低频率的时钟提高成内部较高频率的时钟（better EMC&EMI）。可以看一个实际的案例：")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"70%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819004939.png",alt:"clock"}})]),t._v(" "),_("h2",{attrs:{id:"总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总线"}},[t._v("#")]),t._v(" 总线")]),t._v(" "),_("p",[t._v("CPU通过内部总线接口访问存储器/外设，MCU的外部总线接口（控制外设）是内部总线接口的信号子集")]),t._v(" "),_("p",[t._v("内部总线接口包括三部分：地址线、数据线、控制线。此外，ARM Cortex M0+还支持专门的单周期IO读写")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"85%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819005547.png",alt:"bus"}})]),t._v(" "),_("h3",{attrs:{id:"地址总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址总线"}},[t._v("#")]),t._v(" 地址总线")]),t._v(" "),_("p",[t._v("总线上的设备（存储器/外设）必须具有一个确定的地址范围。CPU驱动地址总线，地址译码逻辑（decoding circuit）选中对应的设备，地址总线的宽度决定CPU的寻址范围")]),t._v(" "),_("h3",{attrs:{id:"数据总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据总线"}},[t._v("#")]),t._v(" 数据总线")]),t._v(" "),_("p",[t._v("CPU通过数据总线从设备读取数据/向设备写入数据，且数据总线是双向的")]),t._v(" "),_("h3",{attrs:{id:"控制总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#控制总线"}},[t._v("#")]),t._v(" 控制总线")]),t._v(" "),_("p",[t._v("提供读写选定、数据/地址总线、总线仲裁、总线等待等信息")]),t._v(" "),_("p",[t._v("当然，以上都是内部总线，与外部的指令、数据与系统总线不要搞混了！")]),t._v(" "),_("h2",{attrs:{id:"外设"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外设"}},[t._v("#")]),t._v(" 外设")]),t._v(" "),_("p",[t._v("除了片内的模块，调用外部设备、与外部设备通信也是必要的，而 CPU 与外部的通讯也是依靠寄存器完成的。这些寄存器再次将它自己的地址段映射到 IO 接口等等。这样就会有了外设的地址空间，CPU 能借助寄存器与之通信。更详细的信息将会在以后学到")]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("在了解了上面的知识之后，你应该建立起一个 CPU 通过总线将各种片内模块按地址分区的模型，实际上它确实是这么做的。STM32 的32位总线标志着它有4G的地址空间，那么怎么分配是芯片厂商的事情，在"),_("code",[t._v("F103")]),t._v("中是这样：")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200819010532.jpg",alt:"stm"}})]),t._v(" "),_("p",[t._v("先看左边一列：从上到下的是 STM32 将4G的地址均分成8个512MB的块，每个块有特定的用途")]),t._v(" "),_("p",[t._v("像 Block7 里的中断向量表、紧接着寄存器映射、SRAM（包括堆与栈）最后是FLASH")]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://next.xuetangx.com/course/THU08091000435/1075955?fromArray=search_result",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华大学《ARM 微控制器与嵌入式系统》课程"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("STM32F103x 数据手册")]),t._v(" "),_("li",[t._v("STM32F10x 参考手册")])])])}),[],!1,null,null,null);v.default=r.exports}}]);