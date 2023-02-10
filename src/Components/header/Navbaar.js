import React, { useEffect } from 'react'
import "./navbaar.css"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles, Grid, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Unstable_Grid2, Unstable_TrapFocus, Zoom, accordionActionsClasses, accordionClasses, accordionDetailsClasses, accordionSummaryClasses, adaptV4Theme, alertClasses, alertTitleClasses, alpha, appBarClasses, ariaHidden, autocompleteClasses, avatarClasses, avatarGroupClasses, backdropClasses, badgeClasses, bottomNavigationActionClasses, bottomNavigationClasses, breadcrumbsClasses, buttonBaseClasses, buttonClasses, buttonGroupClasses, capitalize, cardActionAreaClasses, cardActionsClasses, cardClasses, cardContentClasses, cardHeaderClasses, cardMediaClasses, checkboxClasses, chipClasses, circularProgressClasses, collapseClasses, colors, containerClasses, createChainedFunction, createFilterOptions, createMuiTheme, createStyles, createSvgIcon, createTheme, css, darkScrollbar, darken, debounce, decomposeColor, deprecatedPropType, dialogActionsClasses, dialogClasses, dialogContentClasses, dialogContentTextClasses, dialogTitleClasses, dividerClasses, drawerClasses, duration, easing, emphasize, experimentalStyled, experimental_extendTheme, experimental_sx, fabClasses, filledInputClasses, formControlClasses, formControlLabelClasses, formGroupClasses, formHelperTextClasses, formLabelClasses, generateUtilityClass, generateUtilityClasses, getAccordionActionsUtilityClass, getAccordionDetailsUtilityClass, getAccordionSummaryUtilityClass, getAccordionUtilityClass, getAlertTitleUtilityClass, getAlertUtilityClass, getAppBarUtilityClass, getAutocompleteUtilityClass, getAvatarGroupUtilityClass, getAvatarUtilityClass, getBackdropUtilityClass, getBadgeUtilityClass, getBottomNavigationActionUtilityClass, getBottomNavigationUtilityClass, getBreadcrumbsUtilityClass, getButtonBaseUtilityClass, getButtonGroupUtilityClass, getButtonUtilityClass, getCardActionAreaUtilityClass, getCardActionsUtilityClass, getCardContentUtilityClass, getCardHeaderUtilityClass, getCardMediaUtilityClass, getCardUtilityClass, getCheckboxUtilityClass, getChipUtilityClass, getCircularProgressUtilityClass, getCollapseUtilityClass, getContainerUtilityClass, getContrastRatio, getDialogActionsUtilityClass, getDialogContentTextUtilityClass, getDialogContentUtilityClass, getDialogTitleUtilityClass, getDialogUtilityClass, getDividerUtilityClass, getDrawerUtilityClass, getFabUtilityClass, getFilledInputUtilityClass, getFormControlLabelUtilityClasses, getFormControlUtilityClasses, getFormGroupUtilityClass, getFormHelperTextUtilityClasses, getFormLabelUtilityClasses, getGrid2UtilityClass, getGridUtilityClass, getIconButtonUtilityClass, getIconUtilityClass, getImageListItemBarUtilityClass, getImageListItemUtilityClass, getImageListUtilityClass, getInitColorSchemeScript, getInputAdornmentUtilityClass, getInputBaseUtilityClass, getInputLabelUtilityClasses, getInputUtilityClass, getLinearProgressUtilityClass, getLinkUtilityClass, getListItemAvatarUtilityClass, getListItemButtonUtilityClass, getListItemIconUtilityClass, getListItemSecondaryActionClassesUtilityClass, getListItemTextUtilityClass, getListItemUtilityClass, getListSubheaderUtilityClass, getListUtilityClass, getLuminance, getMenuItemUtilityClass, getMenuUtilityClass, getMobileStepperUtilityClass, getModalUtilityClass, getNativeSelectUtilityClasses, getOffsetLeft, getOffsetTop, getOutlinedInputUtilityClass, getOverlayAlpha, getPaginationItemUtilityClass, getPaginationUtilityClass, getPaperUtilityClass, getPopoverUtilityClass, getRadioUtilityClass, getRatingUtilityClass, getScopedCssBaselineUtilityClass, getSelectUtilityClasses, getSkeletonUtilityClass, getSliderUtilityClass, getSnackbarContentUtilityClass, getSnackbarUtilityClass, getSpeedDialActionUtilityClass, getSpeedDialIconUtilityClass, getSpeedDialUtilityClass, getStepButtonUtilityClass, getStepConnectorUtilityClass, getStepContentUtilityClass, getStepIconUtilityClass, getStepLabelUtilityClass, getStepUtilityClass, getStepperUtilityClass, getSvgIconUtilityClass, getSwitchUtilityClass, getTabScrollButtonUtilityClass, getTabUtilityClass, getTableBodyUtilityClass, getTableCellUtilityClass, getTableContainerUtilityClass, getTableFooterUtilityClass, getTableHeadUtilityClass, getTablePaginationUtilityClass, getTableRowUtilityClass, getTableSortLabelUtilityClass, getTableUtilityClass, getTabsUtilityClass, getTextFieldUtilityClass, getToggleButtonGroupUtilityClass, getToggleButtonUtilityClass, getToolbarUtilityClass, getTooltipUtilityClass, getTouchRippleUtilityClass, getTypographyUtilityClass, grid2Classes, gridClasses, hexToRgb, hslToRgb, iconButtonClasses, iconClasses, imageListClasses, imageListItemBarClasses, imageListItemClasses, inputAdornmentClasses, inputBaseClasses, inputClasses, inputLabelClasses, isMuiElement, keyframes, lighten, linearProgressClasses, linkClasses, listClasses, listItemAvatarClasses, listItemButtonClasses, listItemClasses, listItemIconClasses, listItemSecondaryActionClasses, listItemTextClasses, listSubheaderClasses, makeStyles, menuClasses, menuItemClasses, mobileStepperClasses, modalClasses, modalUnstyledClasses, nativeSelectClasses, outlinedInputClasses, ownerDocument, ownerWindow, paginationClasses, paginationItemClasses, paperClasses, popoverClasses, private_createTypography, private_excludeVariablesFromRoot, radioClasses, ratingClasses, recomposeColor, requirePropFactory, responsiveFontSizes, rgbToHex, scopedCssBaselineClasses, selectClasses, setRef, shouldSkipGeneratingVar, skeletonClasses, sliderClasses, snackbarClasses, snackbarContentClasses, speedDialActionClasses, speedDialClasses, speedDialIconClasses, stepButtonClasses, stepClasses, stepConnectorClasses, stepContentClasses, stepIconClasses, stepLabelClasses, stepperClasses, styled, svgIconClasses, switchClasses, tabClasses, tabScrollButtonClasses, tableBodyClasses, tableCellClasses, tableClasses, tableContainerClasses, tableFooterClasses, tableHeadClasses, tablePaginationClasses, tableRowClasses, tableSortLabelClasses, tabsClasses, textFieldClasses, toggleButtonClasses, toggleButtonGroupClasses, toolbarClasses, tooltipClasses, touchRippleClasses, typographyClasses, unstable_ClassNameGenerator, unstable_composeClasses, unstable_createMuiStrictModeTheme, unstable_getUnit, unstable_toUnitless, unstable_useEnhancedEffect, unstable_useId, unsupportedProp, useAutocomplete, useColorScheme, useControlled, useEventCallback, useForkRef, useFormControl, useIsFocusVisible, useMediaQuery, usePagination, useRadioGroup, useScrollTrigger, useStepContext, useStepperContext, useTheme, useThemeProps, withStyles, withTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Rightheader from "./Rightheader"
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';


function Navbaar() {

    const state = useSelector(state => state.cart)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" >
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    {/* here define the right header */}
                    <Drawer  >
                        <Rightheader />
                    </Drawer>
                    <div className="navlogo">
                        <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name=""

                            placeholder="Search Your Products" />
                        <div className="search_icon">
                           <SearchIcon id="search"/>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">Sign in</NavLink>
                    </div>
                    <NavLink to="/cart">   <div className="cart_btn">
                        <Badge badgeContent={state.length} color="success" sx={{ mr: 2 }}>
                            <ShoppingCartIcon color="primary" />
                        </Badge>
                        <p>Cart</p>
                    </div> </NavLink>
                    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                </div>
            </nav>
        </header>
    )
}

export default Navbaar