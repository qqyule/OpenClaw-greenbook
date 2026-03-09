import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'OpenClaw 绿皮书',
	titleTemplate: ':title - OpenClaw 绿皮书',
	description:
		'从入门到精通，探索更适合小白阅读的 OpenClaw 教程。学习如何部署多端、跨平台、开源自托管的个人 AI 智能体数字员工。',
	head: [
		[
			'meta',
			{
				name: 'keywords',
				content:
					'OpenClaw, AI智能体, AI Agent, 数字员工, 开源AI, 自托管, 保姆级教程, 绿皮书',
			},
		],
		['meta', { property: 'og:title', content: 'OpenClaw 绿皮书' }],
		[
			'meta',
			{
				property: 'og:description',
				content:
					'从入门到精通，更适合小白阅读的 OpenClaw 教程，手把手教你拥有自己的 AI 数字员工。',
			},
		],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['link', { rel: 'icon', href: '/lobster.png' }],
	],
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '快速开始', link: '/part1/01-what-is-openclaw' },
			{
				text: '🆓 免费GLM-5',
				link: 'https://ai.baishan.com/auth/login?referralCode=rmuKCltQFi',
			},
		],
		sidebar: [
			{
				text: 'Part 1: 认识 OpenClaw',
				items: [
					{ text: '01 什么是 OpenClaw', link: '/part1/01-what-is-openclaw' },
					{ text: '02 发展简史', link: '/part1/02-history' },
					{ text: '03 创始人故事', link: '/part1/03-founder' },
					{ text: '04 为什么这么火', link: '/part1/04-popularity' },
				],
			},
			{
				text: 'Part 2: 技术架构',
				items: [
					{ text: '05 整体架构', link: '/part2/05-architecture' },
					{ text: '06 记忆系统', link: '/part2/06-memory' },
					{ text: '07 Agent 工作区', link: '/part2/07-workspace' },
					{ text: '08 Session 与用户识别', link: '/part2/08-session' },
					{ text: '09 设计哲学', link: '/part2/09-philosophy' },
				],
			},
			{
				text: 'Part 3: 部署方案',
				items: [
					{ text: '10 部署方式总览', link: '/part3/10-overview' },
					{ text: '11 本地安装', link: '/part3/11-local' },
					{ text: '12 Docker 部署', link: '/part3/12-docker' },
					{ text: '13 国内云一键部署', link: '/part3/13-cloud' },
					{ text: '14 首次配置', link: '/part3/14-config' },
				],
			},
			{
				text: 'Part 4: 渠道接入',
				items: [
					{ text: '15 渠道概览', link: '/part4/15-overview' },
					{ text: '16 国际平台接入', link: '/part4/16-international' },
					{ text: '17 国内平台接入', link: '/part4/17-domestic' },
					{ text: '18 远程访问', link: '/part4/18-remote' },
				],
			},
			{
				text: 'Part 5: Skills 系统',
				items: [
					{ text: '19 Skills 工作原理', link: '/part5/19-how-it-works' },
					{ text: '20 ClawHub 技能市场', link: '/part5/20-clawhub' },
					{ text: '21 热门 Skills 推荐', link: '/part5/21-top-skills' },
					{ text: '22 自建 Skill 指南', link: '/part5/22-create-skill' },
					{ text: '23 Skills 安全', link: '/part5/23-security' },
				],
			},
			{
				text: 'Part 6: 模型配置',
				items: [
					{ text: '24 模型提供商总览', link: '/part6/24-overview' },
					{ text: '25 国际模型配置', link: '/part6/25-international' },
					{ text: '26 国产模型配置', link: '/part6/26-domestic' },
					{ text: '27 本地模型推荐', link: '/part6/27-local' },
				],
			},
			{
				text: 'Part 7: 安全与成本',
				items: [
					{ text: '28 安全模型', link: '/part7/28-security' },
					{ text: '29 已知安全事件', link: '/part7/29-incidents' },
					{ text: '30 成本控制', link: '/part7/30-cost' },
				],
			},
			{
				text: 'Part 8: 生态与社区',
				items: [
					{ text: '31 养虾文化', link: '/part8/31-culture' },
					{ text: '32 平替产品', link: '/part8/32-alternatives' },
					{ text: '33 vs Claude Code', link: '/part8/33-vs-claudecode' },
					{ text: '34 国内生态', link: '/part8/34-china' },
				],
			},
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/OhMyOpenCode/OpenClaw' },
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2026 OpenClaw 指南',
		},
		search: {
			provider: 'local',
		},
	},
	sitemap: {
		hostname: 'https://openclaw-cookbook.justidea.cn',
	},
	lang: 'zh-CN',
})
