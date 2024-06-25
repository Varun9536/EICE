/* eslint-disable react/display-name */
import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Menu as BaseMenu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';

function Servicebutton()
{

    const createHandleMenuClick = (menuItem) => {
        return () => {
          console.log(`Clicked on ${menuItem}`);
        };
      };

      const resolveSlotProps = (fn, args) => (typeof fn === 'function' ? fn(args) : fn);

      const Menu = React.forwardRef((props, ref) => {
      
        return (
          <BaseMenu
            ref={ref}
            {...props}
            slotProps={{
              ...props.slotProps,
              root: (ownerState) => {
                const resolvedSlotProps = resolveSlotProps(
                  props.slotProps?.root,
                  ownerState,
                );
                return {
                  ...resolvedSlotProps,
                  className: clsx(
                    
                    resolvedSlotProps?.className,
                  ),
                };
              },
              listbox: (ownerState) => {
                const resolvedSlotProps = resolveSlotProps(
                  props.slotProps?.listbox,
                  ownerState,
                );
                return {
                  ...resolvedSlotProps,
                  className: clsx(
                    'max-w-[800px] text-2xl z-50 box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-visible outline-0 bg-white  border border-solid border-slate-200 text-slate-900 min-w-listbox shadow-md',
                    resolvedSlotProps?.className,
                  ),
                };
              },
            }}
          />
        );
      });
      
      Menu.propTypes = {
        /**
         * The props used for each slot inside the Menu.
         * @default {}
         */
        slotProps: PropTypes.shape({
          listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
          root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        }),
      };
      
      const MenuButton = React.forwardRef((props, ref) => {
        const { className, ...other } = props;
        return (
          <BaseMenuButton
            ref={ref}
            className={clsx(
              '',
              className,
            )}
            {...other}
          />
        );
      });
      
      MenuButton.propTypes = {
        /**
         * Class name applied to the root element.
         */
        className: PropTypes.string,
      };
      
      // eslint-disable-next-line react/display-name
      const MenuItem = React.forwardRef((props, ref) => {
        const { className, ...other } = props;
        return (
          <BaseMenuItem
            ref={ref}
            className={clsx(
              'list-none pt-2 pb-2 mt-2 grid rounded-lg cursor-default select-none last-of-type:border-b-0 disabled:text-slate-400  disabled:hover:text-slate-400',
              className,
            )}
            {...other}
          />
        );
      });
      
      MenuItem.propTypes = {
        className: PropTypes.string,
      }
      
    return(
        <div>
            <Dropdown>
              <MenuButton className="group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out p-6">
                <div><span>SERVICES</span></div>
                <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'></div>
              </MenuButton>
              <Menu className='font-semibold'>

              <div className="flex flex-col p-8">
                <div className="grid grid-cols-3 gap-8"> 
                    <div>
                        Mobile & Web App Development
                    </div>
                    <div>
                        Consultancy Services
                    </div>
                    <div>
                        AI & ML
                    </div>
                    <div>
                        IOT
                    </div>
                    <div>
                        Operational Services
                    </div>
                    <div>
                        Design Services
                    </div>
                </div>
                <div className="items-center justify-center text-center">
                    <MenuItem onClick={createHandleMenuClick('Services')}><a className='' href="/services">Learn More</a></MenuItem>
                </div>
              </div>

              </Menu>
            </Dropdown>
        </div>
    )
}

export default Servicebutton;