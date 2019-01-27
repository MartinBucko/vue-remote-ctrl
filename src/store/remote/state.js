export default {
  lastCmd: null,
  connected: false,
  messages: [],
  ctrl: {
    tv: {
      name: 'tv',
      buttons: [
        {
          cmd: 'TV_ON', icon: 'tv off', hidden: false, color: 'red'
        },
        { cmd: 'TV_VOL_UP', icon: 'volume up', hidden: false },
        { cmd: 'TV_VOL_DOWN', icon: 'volume down', hidden: false },
        { cmd: 'TV_MUTE', icon: 'volume mute', hidden: false },
        { cmd: 'TV_SOURCE', icon: 'input', hidden: false },
        { cmd: 'TV_SRC_TV', icon: 'tv', hidden: false },

        { cmd: 'br' },
        { cmd: 'TV_CH_UP', icon: 'keyboard_arrow_up', hidden: false },
        { cmd: 'TV_CH_DOWN', icon: 'keyboard_arrow_down', hidden: false },

        { cmd: 'br' },

        { cmd: 'TV_CH_1', icon: 'filter 1', hidden: false },
        { cmd: 'TV_CH_2', icon: 'filter 2', hidden: false },
        { cmd: 'TV_CH_3', icon: 'filter 3', hidden: false },
        { cmd: 'TV_CH_4', icon: 'filter 4', hidden: false },
        { cmd: 'TV_CH_5', icon: 'filter 5', hidden: false },
        { cmd: 'TV_CH_6', icon: 'filter 6', hidden: false },
        { cmd: 'TV_CH_7', icon: 'filter 7', hidden: false },
        { cmd: 'TV_CH_8', icon: 'filter 8', hidden: false },
        { cmd: 'TV_CH_9', icon: 'filter 9', hidden: false },
        { cmd: 'TV_CH_0', icon: 'filter none', hidden: false },

        { cmd: 'br' },

        { cmd: 'TV_FAV', icon: 'star', hidden: false },
        { cmd: 'TV_PREV', icon: 'repeat', hidden: false },
        { cmd: 'TV_INFO', icon: 'info', hidden: false },
        { cmd: 'TV_GUIDE', icon: 'view_comfy', hidden: false },
        { cmd: 'TV_MENU', icon: 'menu', hidden: false },
        { cmd: 'TV_TOOLS', icon: 'settings', hidden: false },
        { cmd: 'TV_RETURN', icon: 'keyboard_return', hidden: false },
        { cmd: 'TV_INET', icon: 'public', hidden: false },
        { cmd: 'TV_EXIT', icon: 'exit_to_app', hidden: false },

        { cmd: 'TV_TTX', icon: 'format_align_left', hidden: false },
        { cmd: 'TV_MEDIA', icon: 'photo_library', hidden: false },
        { cmd: 'TV_CONT', icon: 'tv', hidden: false },
        { cmd: 'TV_CHLIST', icon: 'format_list_numbered', hidden: false },
        { cmd: 'br' },

        { cmd: 'TV_PLAY ', icon: 'play_arrow', hidden: false },
        { cmd: 'TV_STOP', icon: 'stop', hidden: false },
        { cmd: 'TV_REW', icon: 'fast_rewind', hidden: false },
        { cmd: 'TV_FWD', icon: 'fast_forward', hidden: false },
        { cmd: 'TV_PAUSE', icon: 'pause', hidden: false },
        { cmd: 'TV_REC', icon: 'fiber_manual_record', hidden: false },
        { cmd: 'br' },

        { cmd: 'TV_AD', icon: 'tv', hidden: false },
        { cmd: 'TV_SUBT', icon: 'subtitles', hidden: false },
        { cmd: 'br' },

        { cmd: 'TV_LEFT', icon: 'arrow_left', hidden: false },
        { cmd: 'TV_RIGHT', icon: 'arrow_right', hidden: false },
        { cmd: 'TV_UP', icon: 'arrow_drop_up', hidden: false },
        { cmd: 'TV_DOWN', icon: 'arrow_drop_down', hidden: false },
        { cmd: 'TV_ENTER', icon: 'check', hidden: false },
        { cmd: 'br' },

        {
          cmd: 'TV_RED', icon: 'stop', hidden: false, color: 'red'
        },
        {
          cmd: 'TV_GREEN', icon: 'stop', hidden: false, color: 'green'
        },
        {
          cmd: 'TV_YELL', icon: 'stop', hidden: false, color: 'yellow'
        },
        {
          cmd: 'TV_BLUE', icon: 'stop', hidden: false, color: 'blue'
        },
      ]
    },
    stb: {
      name: 'stb',
      buttons: [
        {
          cmd: 'STB_ON', icon: 'tv off', hidden: false, color: 'red'
        },
        { cmd: 'STB_VOL_UP', icon: 'volume up', hidden: false },
        { cmd: 'STB_VOL_DOWN', icon: 'volume down', hidden: false },
        { cmd: 'STB_MUTE', icon: 'volume mute', hidden: false },
        { cmd: 'STB_CH_UP', icon: 'keyboard_arrow_up', hidden: false },
        { cmd: 'STB_CH_DOWN', icon: 'keyboard_arrow_down', hidden: false },
        { cmd: 'br' },

        { cmd: 'STB_CH_1', icon: 'filter 1', hidden: false },
        { cmd: 'STB_CH_2', icon: 'filter 2', hidden: false },
        { cmd: 'STB_CH_3', icon: 'filter 3', hidden: false },
        { cmd: 'STB_CH_4', icon: 'filter 4', hidden: false },
        { cmd: 'STB_CH_5', icon: 'filter 5', hidden: false },
        { cmd: 'STB_CH_6', icon: 'filter 6', hidden: false },
        { cmd: 'STB_CH_7', icon: 'filter 7', hidden: false },
        { cmd: 'STB_CH_8', icon: 'filter 8', hidden: false },
        { cmd: 'STB_CH_9', icon: 'filter 9', hidden: false },
        { cmd: 'STB_CH_0', icon: 'filter none', hidden: false },
        { cmd: 'STB_CH_DOT', icon: 'minimize', hidden: false },
        { cmd: 'STB_CH_REP', icon: 'repeat', hidden: false },
        { cmd: 'br' },

        { cmd: 'STB_CLOK', icon: 'av_timer', hidden: false },
        { cmd: 'STB_OK', icon: 'check', hidden: false },
        { cmd: 'STB_EPG', icon: 'view_list', hidden: false },
        { cmd: 'STB_EXIT', icon: 'exit_to_app', hidden: false },
        { cmd: 'STB_INFO', icon: 'info', hidden: false },
        { cmd: 'STB_BACK', icon: 'keyboard_backspace', hidden: false },
        { cmd: 'br' },

        { cmd: 'STB_UP', icon: 'arrow_drop_up', hidden: false },
        { cmd: 'STB_DOWN', icon: 'arrow_drop_down', hidden: false },
        { cmd: 'STB_LEFT', icon: 'arrow_left', hidden: false },
        { cmd: 'STB_RIGHT', icon: 'arrow_right', hidden: false },
        { cmd: 'STB_MENU', icon: 'menu', hidden: false },
        { cmd: 'br' },

        { cmd: 'STB_PLAY', icon: 'play_arrow', hidden: false },
        { cmd: 'STB_REW', icon: 'fast_rewind', hidden: false },
        { cmd: 'STB_FWD', icon: 'fast_forward', hidden: false },
        { cmd: 'STB_STOP', icon: 'stop', hidden: false },
        { cmd: 'br' },

        { cmd: 'STB_SRCH', icon: 'search', hidden: false },
        { cmd: 'STB_OPT', icon: 'settings', hidden: false },
        { cmd: 'br' },
        {
          cmd: 'STB_RED', icon: 'stop', hidden: false, color: 'red'
        },
        {
          cmd: 'STB_GREEN', icon: 'stop', hidden: false, color: 'green'
        },
        {
          cmd: 'STB_YELL', icon: 'stop', hidden: false, color: 'yellow'
        },
        {
          cmd: 'STB_BLUE', icon: 'stop', hidden: false, color: 'blue'
        },
      ]
    },
    dvd: {
      name: 'dvd',
      buttons: [
        {
          cmd: 'DVD_ON', icon: 'tv off', hidden: false, color: 'red'
        },
        { cmd: 'DVD_SOURCE', icon: 'input', hidden: false },
        { cmd: 'DVD_VOL_UP', icon: 'volume up', hidden: false },
        { cmd: 'DVD_VOL_DOWN', icon: 'volume down', hidden: false },
        { cmd: 'DVD_MUTE', icon: 'volume mute', hidden: false },
        { cmd: 'DVD_BASS', icon: 'volume mute', hidden: false },
        { cmd: 'DVD_EJECT', icon: 'keyboard_capslock', hidden: false },
        { cmd: 'DVD_PLAY', icon: 'play_arrow', hidden: false },
        { cmd: 'DVD_STOP', icon: 'stop', hidden: false },
        { cmd: 'DVD_PAUSE', icon: 'pause', hidden: false },
        { cmd: 'DVD_REW2', icon: 'fast_rewind', hidden: false },
        { cmd: 'DVD_REW', icon: 'fast_rewind', hidden: false },
        { cmd: 'DVD_FWD', icon: 'fast_forward', hidden: false },
        { cmd: 'DVD_FWD2', icon: 'fast_forward', hidden: false },
        { cmd: 'DVD_RETURN', icon: 'keyboard_return', hidden: false },
        { cmd: 'DVD_DISP', icon: 'settings_brightness', hidden: false },
        { cmd: 'DVD_SYSMENU', icon: 'settings', hidden: false },
        { cmd: 'br' },

        { cmd: 'DVD_CH_1', icon: 'filter 1', hidden: false },
        { cmd: 'DVD_CH_2', icon: 'filter 2', hidden: false },
        { cmd: 'DVD_CH_3', icon: 'filter 3', hidden: false },
        { cmd: 'DVD_CH_4', icon: 'filter 4', hidden: false },
        { cmd: 'DVD_CH_5', icon: 'filter 5', hidden: false },
        { cmd: 'DVD_CH_6', icon: 'filter 6', hidden: false },
        { cmd: 'DVD_CH_7', icon: 'filter 7', hidden: false },
        { cmd: 'DVD_CH_8', icon: 'filter 8', hidden: false },
        { cmd: 'DVD_CH_9', icon: 'filter 9', hidden: false },
        { cmd: 'DVD_CH_0', icon: 'filter none', hidden: false },
        { cmd: 'DVD_CH_DOT', icon: 'minimize', hidden: false },
        { cmd: 'br' },

        { cmd: 'DVD_SUBT', icon: 'subtitles', hidden: false },
        { cmd: 'DVD_ANGLE', icon: 'rotate_90_degrees_ccw', hidden: false },
        { cmd: 'DVD_PICNAV', icon: 'view_module', hidden: false },
        { cmd: 'DVD_AUDIO', icon: 'audiotrack', hidden: false },
        { cmd: 'DVD_VFORMAT', icon: 'theaters', hidden: false },
        { cmd: 'DVD_MOVMUS', icon: 'view_headline', hidden: false },
        { cmd: 'DVD_SOUNF', icon: 'speaker_group', hidden: false },
        { cmd: 'DVD_MTOP', icon: 'arrow_upward', hidden: false },
        { cmd: 'DVD_MENU', icon: 'menu', hidden: false },
        { cmd: 'br' },

        { cmd: 'DVD_ENTER', icon: 'check', hidden: false },
        { cmd: 'DVD_LEFT', icon: 'arrow_left', hidden: false },
        { cmd: 'DVD_RIGH', icon: 'arrow_right', hidden: false },
        { cmd: 'DVD_TOP', icon: 'arrow_drop_up', hidden: false },
        { cmd: 'DVD_DOWN', icon: 'arrow_drop_down', hidden: false },
      ]
    }
  }
}
