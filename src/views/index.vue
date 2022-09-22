<template>
  <div class="app-wrapper">
    <Sidebar :menu-data="menuData" />
    <div class="main-container">
      <Header />
      <div class="main-body">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar/index.vue";
import Header from "@/components/Header/index.vue";
import { ref } from "vue";

interface IMeta {
  title: string;
  icon: null;
  roles: null;
}

interface IMenuData {
  path: string;
  name: string;
  meta: IMeta;
  redirect: string | null;
  isLayout: string | null;
  component: string | null;
  urlType: number;
  children: IMenuData[];
}

const menuData = ref<IMenuData[]>([]);
menuData.value = [
  {
    path: "/management",
    name: "统筹管理",
    meta: {
      title: "统筹管理",
      icon: null,
      roles: null,
    },
    redirect: null,
    isLayout: null,
    component: null,
    urlType: 2,
    children: [
      {
        path: "/",
        name: "业务看板",
        meta: {
          title: "业务看板",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/management/deploy/waterSupply",
            name: "供水",
            meta: {
              title: "供水",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/management/deploy/drain",
            name: "排水",
            meta: {
              title: "排水",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/management/map",
        name: "智能监测/报警一张图",
        meta: {
          title: "智能监测/报警一张图",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [],
      },
      {
        path: "/management/attendance",
        name: "投诉/事件一张图",
        meta: {
          title: "投诉/事件一张图",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [],
      },
    ],
  },
  {
    path: "/assess",
    name: "业务管理",
    meta: {
      title: "业务管理",
      icon: null,
      roles: null,
    },
    redirect: null,
    isLayout: null,
    component: null,
    urlType: 2,
    children: [
      {
        path: "/assess/emergency",
        name: "供水管理",
        meta: {
          title: "供水管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/emergency/monitor",
            name: "供水管理监测",
            meta: {
              title: "供水管理监测",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/dispatch",
            name: "供水管理调度",
            meta: {
              title: "供水管理调度",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/history",
            name: "供水管理调度指令历史",
            meta: {
              title: "供水管理调度指令历史",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/status",
            name: "运行状态",
            meta: {
              title: "运行状态",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/analyze",
            name: "供水路径分析",
            meta: {
              title: "供水路径分析",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/simulation",
            name: "爆管工况模拟",
            meta: {
              title: "爆管工况模拟",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/network/index",
            name: "管网分析",
            meta: {
              title: "管网分析",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/standBook/index",
            name: "小区台账",
            meta: {
              title: "小区台账",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/emergency/fireHydrant/index",
            name: "消火栓台账",
            meta: {
              title: "消火栓台账",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/prevention",
        name: "排水管理",
        meta: {
          title: "排水管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/prevention/monitor",
            name: "排水管理监测",
            meta: {
              title: "排水管理监测",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/prevention/dispatch",
            name: "排水管理调度",
            meta: {
              title: "排水管理调度",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/prevention/analyze",
            name: "排水管理分析",
            meta: {
              title: "排水管理分析",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/prevention/history",
            name: "排水管理调度指令历史",
            meta: {
              title: "排水管理调度指令历史",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/prevention/ventSource/index",
            name: "排口溯源",
            meta: {
              title: "排口溯源",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/prevention/sinkhole",
            name: "地陷隐患",
            meta: {
              title: "地陷隐患",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/supervision",
        name: "防汛管理",
        meta: {
          title: "防汛管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/supervision/monitor",
            name: "防汛管理监测",
            meta: {
              title: "防汛管理监测",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/supervision/dispatch",
            name: "防汛管理调度",
            meta: {
              title: "防汛管理调度",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/supervision/analyze",
            name: "防汛管理分析",
            meta: {
              title: "防汛管理分析",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/supervision/flooded",
            name: "易淹点点位信息维护",
            meta: {
              title: "易淹点点位信息维护",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/supervision/waterpoint",
            name: "积水点点位信息维护",
            meta: {
              title: "积水点点位信息维护",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/supervision/historicalpoint",
            name: "历史积水库",
            meta: {
              title: "历史积水库",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "\r\n/assess/supervision/bookLog",
            name: "值班日志",
            meta: {
              title: "值班日志",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/data",
        name: "应急管理",
        meta: {
          title: "应急管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/data/summation",
            name: "应急总览",
            meta: {
              title: "应急总览",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/data/monitor",
            name: "应急一张图",
            meta: {
              title: "应急一张图",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/data/workcenter",
            name: "工单处置中心",
            meta: {
              title: "工单处置中心",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/data/feedback",
            name: "动态实时反馈",
            meta: {
              title: "动态实时反馈",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/data/communication",
            name: "实时沟通",
            meta: {
              title: "实时沟通",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/data/report",
            name: "报告生成",
            meta: {
              title: "报告生成",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/setting",
        name: "配置中心",
        meta: {
          title: "配置中心",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/setting/alarm",
            name: "调度指令模板",
            meta: {
              title: "调度指令模板",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/setting/message",
            name: "信息推送设置",
            meta: {
              title: "信息推送设置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/setting/rules",
            name: "告警规则设置",
            meta: {
              title: "告警规则设置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/setting/sms-record",
            name: "短信记录",
            meta: {
              title: "短信记录",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/event",
        name: "事件中心",
        meta: {
          title: "事件中心",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/event/watersupply",
            name: "供水告警",
            meta: {
              title: "供水告警",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/event/drainage",
            name: "排水告警",
            meta: {
              title: "排水告警",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/event/alarmHistory",
            name: "告警历史",
            meta: {
              title: "告警历史",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/knowledge",
        name: "知识库",
        meta: {
          title: "知识库",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/knowledge/file",
            name: "文档管理",
            meta: {
              title: "文档管理",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/knowledge/type",
            name: "类型管理",
            meta: {
              title: "类型管理",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/standingBook",
        name: "台账模块",
        meta: {
          title: "台账模块",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/dataType",
            name: "数据类型",
            meta: {
              title: "数据类型",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/stationType",
            name: "站点类型",
            meta: {
              title: "站点类型",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/station",
            name: "站点定义",
            meta: {
              title: "站点定义",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/configForm",
            name: "组件配置",
            meta: {
              title: "组件配置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
      {
        path: "/assess/alarmModule",
        name: "报警模块",
        meta: {
          title: "报警模块",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/assess/alarmModule/dictionary",
            name: "字典配置",
            meta: {
              title: "字典配置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/alarmModule/notice",
            name: "通知方案",
            meta: {
              title: "通知方案",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/alarmModule/alert",
            name: "报警配置",
            meta: {
              title: "报警配置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/alarmModule/multiple",
            name: "多条件报警配置",
            meta: {
              title: "多条件报警配置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/assess/alarmModule/multipleItem",
            name: "多条件配置",
            meta: {
              title: "多条件配置",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
    ],
  },
];
</script>

<style lnag="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.main-container{
  flex: 1;
}
</style>
