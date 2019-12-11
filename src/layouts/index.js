// import React, { useContext, useState } from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Drawer from '@material-ui/core/Drawer'
// import Box from '@material-ui/core/Box'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import List from '@material-ui/core/List'
// import Typography from '@material-ui/core/Typography'
// import Divider from '@material-ui/core/Divider'
// import IconButton from '@material-ui/core/IconButton'
// import Badge from '@material-ui/core/Badge'
// import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
// import MenuIcon from '@material-ui/icons/Menu'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import NotificationsIcon from '@material-ui/icons/Notifications'
// import { mainListItems } from './listItems'
// import Button from '@material-ui/core/Button'
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'
// import Avatar from '@material-ui/core/Avatar'

// import Paper from '@material-ui/core/Paper'

// import Chart from '../components/chart'
// import Deposits from '../components/deposits'
// import Orders from '../components/orders'

// import { CTX } from '../tools/context'

// function Copyright() {
// 	return (
// 		<Typography variant="body2" color="textSecondary" align="center">
// 			{'Copyright © '}
// 			{/* <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "} */}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	)
// }

// const drawerWidth = 240

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		display: 'flex'
// 	},
// 	defaultAvatar: {
// 		width: 24,
// 		height: 24
// 	},
// 	toolbar: {
// 		paddingRight: 24 // keep right padding when drawer closed
// 	},
// 	toolbarIcon: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'flex-end',
// 		padding: '0 8px',
// 		...theme.mixins.toolbar
// 	},
// 	appBar: {
// 		zIndex: theme.zIndex.drawer + 1,
// 		transition: theme.transitions.create(['width', 'margin'], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen
// 		})
// 	},
// 	appBarShift: {
// 		marginLeft: drawerWidth,
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		transition: theme.transitions.create(['width', 'margin'], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen
// 		})
// 	},
// 	menuButton: {
// 		marginRight: 36
// 	},
// 	menuButtonHidden: {
// 		display: 'none'
// 	},
// 	title: {
// 		flexGrow: 1
// 	},
// 	drawerPaper: {
// 		position: 'relative',
// 		whiteSpace: 'nowrap',
// 		width: drawerWidth,
// 		transition: theme.transitions.create('width', {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen
// 		})
// 	},
// 	drawerPaperClose: {
// 		overflowX: 'hidden',
// 		transition: theme.transitions.create('width', {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen
// 		}),
// 		width: theme.spacing(7),
// 		[theme.breakpoints.up('sm')]: {
// 			width: theme.spacing(9)
// 		}
// 	},
// 	appBarSpacer: theme.mixins.toolbar,
// 	content: {
// 		flexGrow: 1,
// 		height: '100vh',
// 		overflow: 'auto'
// 	},
// 	container: {
// 		paddingTop: theme.spacing(4),
// 		paddingBottom: theme.spacing(4)
// 	},
// 	paper: {
// 		padding: theme.spacing(2),
// 		display: 'flex',
// 		overflow: 'auto',
// 		flexDirection: 'column'
// 	},
// 	fixedHeight: {
// 		height: 240
// 	}
// }))

// function index(props) {
// 	const authContext = useContext(CTX)
// 	const { logout } = authContext

// 	const { children } = props

// 	const t = 'helloT'

// 	const classes = useStyles()
// 	const [open, setOpen] = useState(true)

// 	const handleDrawerOpen = () => {
// 		setOpen(true)
// 	}

// 	const handleDrawerClose = () => {
// 		setOpen(false)
// 	}

// 	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

// 	function onLogout() {
// 		logout()
// 	}

// 	const [anchorEl, setAnchorEl] = useState(null)

// 	const handleClick = event => {
// 		setAnchorEl(event.currentTarget)
// 	}

// 	const handleClose = () => {
// 		setAnchorEl(null)
// 	}

// 	return (
// 		<div>
// 			<div className={classes.root}>
// 				<CssBaseline />
// 				<AppBar
// 					position="absolute"
// 					className={clsx(classes.appBar, open && classes.appBarShift)}
// 				>
// 					<Toolbar className={classes.toolbar}>
// 						<IconButton
// 							edge="start"
// 							color="inherit"
// 							aria-label="open drawer"
// 							onClick={handleDrawerOpen}
// 							className={clsx(
// 								classes.menuButton,
// 								open && classes.menuButtonHidden
// 							)}
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Typography
// 							component="h1"
// 							variant="h6"
// 							color="inherit"
// 							noWrap
// 							className={classes.title}
// 						>
// 							Dashboard
// 						</Typography>

// 						<IconButton
// 							aria-label="more"
// 							aria-controls="long-menu"
// 							aria-haspopup="true"
// 							onClick={handleClick}
// 						>
// 							<Avatar
// 								className={classes.defaultAvatar}
// 								src="https://res.cloudinary.com/chnirt/image/upload/v1573662028/rest/2019-11-13T16:20:22.699Z.png"
// 							/>
// 						</IconButton>
// 						<Menu
// 							id="simple-menu"
// 							anchorEl={anchorEl}
// 							keepMounted
// 							open={Boolean(anchorEl)}
// 							onClose={handleClose}
// 						>
// 							<MenuItem onClick={handleClose}>Profile</MenuItem>
// 							<MenuItem onClick={handleClose}>My account</MenuItem>
// 							<MenuItem onClick={onLogout}>Logout</MenuItem>
// 						</Menu>
// 					</Toolbar>
// 				</AppBar>
// 				<Drawer
// 					variant="permanent"
// 					classes={{
// 						paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
// 					}}
// 					open={open}
// 				>
// 					<div className={classes.toolbarIcon}>
// 						<IconButton onClick={handleDrawerClose}>
// 							<ChevronLeftIcon />
// 						</IconButton>
// 					</div>
// 					<Divider />
// 					<List>{mainListItems}</List>
// 				</Drawer>
// 				<main className={classes.content}>
// 					<div className={classes.appBarSpacer} />

// 					<Container maxWidth="lg" className={classes.container}>
// 						{React.cloneElement(children, {
// 							t,
// 							fixedHeightPaper,
// 							container: classes.container,
// 							paper: classes.paper
// 						})}
// 						{/* <Grid container spacing={3}>
// 							<Grid item xs={12} md={8} lg={9}>
// 								<Paper className={fixedHeightPaper}>
// 									<Chart />
// 								</Paper>
// 							</Grid>
// 							<Grid item xs={12} md={4} lg={3}>
// 								<Paper className={fixedHeightPaper}>
// 									<Deposits />
// 								</Paper>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<Paper className={classes.paper}>
// 									<Orders />
// 								</Paper>
// 							</Grid>
// 						</Grid> */}
// 						<Box pt={4}>
// 							<Copyright />
// 						</Box>
// 					</Container>
// 				</main>
// 			</div>
// 		</div>
// 	)
// }

// export default index

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'

import { Sidebar, Topbar, Footer } from './Main/components'

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: 56,
		height: '100%',
		[theme.breakpoints.up('sm')]: {
			paddingTop: 64
		}
	},
	shiftContent: {
		paddingLeft: 240
	},
	content: {
		height: '100%'
	}
}))

const Main = props => {
	const { children } = props

	const classes = useStyles()
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true
	})

	const [openSidebar, setOpenSidebar] = useState(false)

	const handleSidebarOpen = () => {
		setOpenSidebar(true)
	}

	const handleSidebarClose = () => {
		setOpenSidebar(false)
	}

	const shouldOpenSidebar = isDesktop ? true : openSidebar

	return (
		<div
			className={clsx({
				[classes.root]: true,
				[classes.shiftContent]: isDesktop
			})}
		>
			<Topbar onSidebarOpen={handleSidebarOpen} />
			<Sidebar
				onClose={handleSidebarClose}
				open={shouldOpenSidebar}
				variant={isDesktop ? 'persistent' : 'temporary'}
			/>
			<main className={classes.content}>
				{children}
				<Footer />
			</main>
		</div>
	)
}

Main.propTypes = {
	children: PropTypes.node
}

export default Main